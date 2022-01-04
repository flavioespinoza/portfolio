// NOTE: ebay Additions at bottom of file
var ebay = ebay || {};
// BEGIN ebay Additions
jQuery.noConflict();
var $j = jQuery;
// END ebay Additions
// ----- Bubble
var ebay = ebay || {};
ebay.formatNumber = function(n, decimals) {
    var s, remainder, num, negativePrefix, negativeSuffix, prefix, suffix;
    suffix = ""
    negativePrefix = ""
    negativeSuffix = ""
    if (n < 0) {
        negativePrefix = "";
        negativeSuffix = " in income"
        n = -n
    };
    if (n >= 1000000000000) {
        suffix = " trillion"
        n = n / 1000000000000
        decimals = 2
    } else if (n >= 1000000000) {
        suffix = " billion"
        n = n / 1000000000
        decimals = 1
    } else if (n >= 1000000) {
        suffix = " million"
        n = n / 1000000
        decimals = 1
    }
    prefix = ""
    if (decimals > 0) {
        if (n < 1) {
            prefix = "0"
        };
        s = String(Math.round(n * (Math.pow(10, decimals))));
        if (s < 10) {
            remainder = "0" + s.substr(s.length - (decimals), decimals);
            num = "";
        } else {
            remainder = s.substr(s.length - (decimals), decimals);
            num = s.substr(0, s.length - decimals);
        }
        return negativePrefix + prefix + num.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + "." + remainder + suffix + negativeSuffix;
    } else {
        s = String(Math.round(n));
        s = s.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        return negativePrefix + s + suffix + negativeSuffix;
    }
};
// ----- Begin Bubble Chart -----
var ebay = ebay || {};
ebay.Chart = function() {
    return {
        $j: jQuery,
        //defaults
        width: 970,
        height: 850,
        groupPadding: 10,
        totalValue: 3700000000,
        deficitValue: 901000000,
        // CONST
        relevant: "relevant",
        DISCRETIONARY: "Discretionary",
        NET_INTEREST: "Net interest",
        //will be calculated later
        boundingRadius: null,
        maxRadius: null,
        centerX: null,
        centerY: null,
        scatterPlotY: null,
        //d3 settings
        defaultGravity: 0.1,
        defaultCharge: function(d) {
            if (d.value < 0) {
                return 0
            } else {
                return -Math.pow(d.radius, 2.0) / 8
            };
        },
        links: [],
        nodes: [],
        positiveNodes: [],
        force: {},
        svg: {},
        circle: {},
        gravity: null,
        charge: null,
        changeTickValues: [-0.25, -0.15, -0.05, 0.05, 0.15, 0.25],
        categorizeChange: function(c) {
            if (isNaN(c)) {
                return 0;
            } else if (c < -0.25) {
                return -3;
            } else if (c < -0.05) {
                return -2;
            } else if (c < -0.001) {
                return -1;
            } else if (c <= 0.001) {
                return 0;
            } else if (c <= 0.05) {
                return 1;
            } else if (c <= 0.25) {
                return 2;
            } else {
                return 3;
            }
        },
        fillColor: d3.scale.ordinal()
            .domain([-3, -2, -1, 0, 1, 2, 3])
            .range(["#031e44", "#06479d", "#0968e0", "#AAA", "#fde1bc", "#f9b862", "#ff9900"]),
        strokeColor: d3.scale.ordinal()
            .domain([-3, -2, -1, 0, 1, 2, 3])
            .range(["ff9900", "#f9b862", "#fde1bc", "#999", "#0968e0", "#06479d", "#031e44"]),
        getFillColor: null,
        getStrokeColor: null,
        pFormat: d3.format("+.1"),
        pctFormat: function() {
            return false
        },
        tickChangeFormat: d3.format("+"),
        simpleFormat: d3.format(","),
        simpleDecimal: d3.format(",.2f"),
        bigFormat: function(n) {
            return ebay.formatNumber(n * 100)
        },
        nameFormat: function(n) {
            return n
        },
        discretionFormat: function(d) {
            if (d == 'Discretionary' || d == 'relevant') {
                return d + " spending"
            } else {
                return d
            }
        },
        rScale: d3.scale.pow().exponent(0.5).domain([0, 1000000000]).range([1, 90]),
        radiusScale: null,
        changeScale: d3.scale.linear().domain([-0.28, 0.28]).range([620, 180]).clamp(true),
        sizeScale: d3.scale.linear().domain([0, 110]).range([0, 1]),
        groupScale: {},
        //data settings
        currentYearDataColumn: 'budget_2013',
        previousYearDataColumn: 'budget_2012',
        data: ebay.budget_array_data,
        categoryPositionLookup: {},
        categoriesList: [],
        init: function() {
            var that = this;
            this.scatterPlotY = this.changeScale(0);
            this.pctFormat = function(p) {
                if (p === Infinity || p === -Infinity) {
                    return "N.A."
                } else {
                    return that.pFormat(p)
                }
            }
            this.radiusScale = function(n) {
                return that.rScale(Math.abs(n));
            };
            this.getStrokeColor = function(d) {
                // if (d.isNegative) {
                //   return "#333"
                // }
                return that.strokeColor(d.changeCategory);
            };
            this.getFillColor = function(d) {
                if (d.isNegative) {
                    return "#fff"
                }
                return that.fillColor(d.changeCategory);
            };
            this.boundingRadius = this.radiusScale(this.totalValue);
            this.centerX = this.width / 2;
            this.centerY = 300;
            ebay.category_data.sort(function(a, b) {
                return b['total'] - a['total'];
            });
            //calculates positions of the category clumps
            //it is probably overly complicated
            var columns = [4, 7, 9, 9]
            rowPadding = [150, 100, 90, 80, 70],
                rowPosition = [220, 450, 600, 720, 817],
                rowOffsets = [130, 80, 60, 45, 48]
            currentX = 0,
                currentY = 0;
            for (var i = 0; i < ebay.category_data.length; i++) {
                var t = 0,
                    w, numInRow = -1,
                    positionInRow = -1,
                    currentRow = -1,
                    cat = ebay.category_data[i]['label'];
                // calc num in this row
                for (var j = 0; j < columns.length; j++) {
                    if (i < (t + columns[j])) {
                        numInRow = columns[j];
                        positionInRow = i - t;
                        currentRow = j;
                        break;
                    };
                    t += columns[j];
                };
                if (numInRow === -1) {
                    numInRow = ebay.category_data.length - d3.sum(columns);
                    currentRow = columns.length;
                    positionInRow = i - d3.sum(columns)
                };
                ebay.category_data[i].row = currentRow;
                ebay.category_data[i].column = positionInRow;
                w = (this.width - 2 * rowPadding[currentRow]) / (numInRow - 1)
                currentX = w * positionInRow + rowPadding[currentRow];
                currentY = rowPosition[currentRow];
                this.categoriesList.push(cat);
                this.categoryPositionLookup[cat] = {
                    x: currentX,
                    y: currentY,
                    w: w * 0.9,
                    offsetY: rowOffsets[currentRow],
                    numInRow: numInRow,
                    positionInRow: positionInRow
                }
            };
            this.groupScale = d3.scale.ordinal().domain(this.categoriesList).rangePoints([0, 1]);
            // Builds the nodes data array from the original data
            for (var i = 0; i < this.data.length; i++) {
                var n = this.data[i];
                var out = {
                    sid: n['id'],
                    radius: this.radiusScale(n[this.currentYearDataColumn]),
                    group: n['department'],
                    change: n['change'],
                    changeCategory: this.categorizeChange(n['change']),
                    value: n[this.currentYearDataColumn],
                    name: n['name'],
                    discretion: n['discretion'],
                    isNegative: (n[this.currentYearDataColumn] < 0),
                    positions: n.positions,
                    x: Math.random() * 1000,
                    y: Math.random() * 1000
                }
                if (n.positions.total) {
                    out.x = n.positions.total.x + (n.positions.total.x - (that.width / 2)) * 0.5;
                    out.y = n.positions.total.y + (n.positions.total.y - (150)) * 0.5;
                };
                if ((n[this.currentYearDataColumn] > 0) !== (n[this.previousYearDataColumn] > 0)) {
                    out.change = "N.A.";
                    out.changeCategory = 0;
                };
                this.nodes.push(out)
            };
            this.nodes.sort(function(a, b) {
                return Math.abs(b.value) - Math.abs(a.value);
            });
            for (var i = 0; i < this.nodes.length; i++) {
                if (!this.nodes[i].isNegative) {
                    this.positiveNodes.push(this.nodes[i])
                }
            };
            this.svg = d3.select("#ebay-chartCanvas").append("svg:svg").attr("width", this.width);
            for (var i = 0; i < this.changeTickValues.length; i++) {
                d3.select("#ebay-discretionaryOverlay").append("div").html("<p>" + this.tickChangeFormat(this.changeTickValues[i]) + "</p>").style("top", this.changeScale(this.changeTickValues[i]) + 'px').classed('ebay-discretionaryTick', true).classed('ebay-discretionaryZeroTick', (this.changeTickValues[i] === 0))
            };
            d3.select("#ebay-discretionaryOverlay").append("div").html("<p></p>").style("top", this.changeScale(0) + 'px').classed('ebay-discretionaryTick', true).classed('ebay-discretionaryZeroTick', true)
            d3.select("#ebay-discretionaryOverlay").append("div").html("<p>+26 or higher</p>").style("top", this.changeScale(100) + 'px').classed('ebay-discretionaryTickLabel', true)
            d3.select("#ebay-discretionaryOverlay").append("div").html("<p>-26 or lower</p>").style("top", this.changeScale(-100) + 'px').classed('ebay-discretionaryTickLabel', true)
            // total circle
            // this.svg.append("circle")
            //   .attr('r', this.radiusScale(this.totalValue))
            //   .style("stroke-width",1)
            //   .style('stroke',"#AAA")
            //   .style('fill','none')
            //   .attr('cx', this.width/2)
            //   .attr('cy', this.height/2);
            // deficit circle
            d3.select("#ebay-deficitCircle").append("circle").attr('r', this.radiusScale(this.deficitValue)).attr('class', "ebay-deficitCircle").attr('cx', 125).attr('cy', 125);
            d3.select("#ebay-scaleKey").append("circle").attr('r', this.radiusScale(100000000)).attr('class', "ebay-scaleKeyCircle").attr('cx', 30).attr('cy', 30);
            d3.select("#ebay-scaleKey").append("circle").attr('r', this.radiusScale(10000000)).attr('class', "ebay-scaleKeyCircle").attr('cx', 30).attr('cy', 50);
            d3.select("#ebay-scaleKey").append("circle").attr('r', this.radiusScale(1000000)).attr('class', "ebay-scaleKeyCircle").attr('cx', 30).attr('cy', 55);
            var departmentOverlay = $j("#ebay-departmentOverlay")
            for (var i = 0; i < ebay.category_data.length; i++) {
                var cat = ebay.category_data[i]['label']
                var catLabel = ebay.category_data[i]['short_label']
                var catTot = this.bigFormat(ebay.category_data[i]['total'])
                var catWidth = this.categoryPositionLookup[cat].w
                var catYOffset = this.categoryPositionLookup[cat].offsetY;
                var catNode;
                if (catLabel === "Other") {
                    catNode = $j("<div class='ebay-departmentAnnotation ebay-row" + ebay.category_data[i]['row'] + "'><p class='department'>" + "Category Label" + "</p></div>")
                } else {
                    catNode = $j("<div class='ebay-departmentAnnotation ebay-row" + ebay.category_data[i]['row'] + "'><p class='total'>" + "Total Influence" + "</p><p class='department'>" + "Category" + "</p></div>")
                }
                catNode.css({
                    'left': this.categoryPositionLookup[cat].x - catWidth / 2,
                    'top': this.categoryPositionLookup[cat].y - catYOffset,
                    'width': catWidth
                })
                departmentOverlay.append(catNode)
            };

//            var departmentOverlay = $j("#ebay-departmentOverlay")
//            for (var i = 0; i < ebay.category_data.length; i++) {
//                var cat = ebay.category_data[i]['label']
//                var catLabel = ebay.category_data[i]['short_label']
//                var catTot = this.bigFormat(ebay.category_data[i]['total'])
//                var catWidth = this.categoryPositionLookup[cat].w
//                var catYOffset = this.categoryPositionLookup[cat].offsetY;
//                var catNode;
//                if (catLabel === "Other") {
//                    catNode = $j("<div class='ebay-departmentAnnotation ebay-row" + ebay.category_data[i]['row'] + "'><p class='department'>" + catLabel + "</p></div>")
//                } else {
//                    catNode = $j("<div class='ebay-departmentAnnotation ebay-row" + ebay.category_data[i]['row'] + "'><p class='total'>$" + catTot + "</p><p class='department'>" + catLabel + "</p></div>")
//                }
//                catNode.css({
//                    'left': this.categoryPositionLookup[cat].x - catWidth / 2,
//                    'top': this.categoryPositionLookup[cat].y - catYOffset,
//                    'width': catWidth
//                })
//                departmentOverlay.append(catNode)
//            };





            // This is the every circle
            this.circle = this.svg.selectAll("circle").data(this.nodes, function(d) {
                return d.sid;
            });
            this.circle.enter().append("svg:circle").attr("r", function(d) {
                return 0;
            }).style("fill", function(d) {
                    return that.getFillColor(d);
                }).style("stroke-width", 1).attr('id', function(d) {
                    return 'ebay-circle' + d.sid
                }).style("stroke", function(d) {
                    return that.getStrokeColor(d);
                }).on("mouseover", function(d, i) {
                    var el = d3.select(this)
                    var xpos = Number(el.attr('cx'))
                    var ypos = (el.attr('cy') - d.radius - 10)
                    el.style("stroke", "#000").style("stroke-width", 3);
                    d3.select("#ebay-tooltip").style('top', ypos + "px").style('left', xpos + "px").style('display', 'block').classed('ebay-plus', (d.changeCategory > 0)).classed('ebay-minus', (d.changeCategory < 0));

                    var tweetName = "Twitter Handle",
                        influencerType = "Type of Influencer - New or Existing",
                        departmentTopic = "Topic: Fashion / Electronics / Games",
                        influenceScore = "Influence: 0"

                    d3.select("#ebay-tooltip .ebay-name").html(tweetName)
                    d3.select("#ebay-tooltip .ebay-discretion").text(influencerType)
                    d3.select("#ebay-tooltip .ebay-department").text(departmentTopic)
                    d3.select("#ebay-tooltip .ebay-value").html(influenceScore)


//                    d3.select("#ebay-tooltip .ebay-name").html(that.nameFormat(d.name))
//                    d3.select("#ebay-tooltip .ebay-discretion").text(that.discretionFormat(d.discretion))
//                    d3.select("#ebay-tooltip .ebay-department").text(d.group)
//                    d3.select("#ebay-tooltip .ebay-value").html("$" + that.bigFormat(d.value))
//                    var pctchngout = that.pctFormat(d.change)
//                    if (d.change == "N.A.") {
//                        pctchngout = "N.A."
//                    };
//                    d3.select("#ebay-tooltip .ebay-change").html(pctchngout)



                }).on("mouseout", function(d, i) {
                    d3.select(this).style("stroke-width", 1).style("stroke", function(d) {
                        return that.getStrokeColor(d);
                    })
                    d3.select("#ebay-tooltip").style('display', 'none')
                });
            this.circle.transition().duration(2000).attr("r", function(d) {
                return d.radius
            })
        },
        getCirclePositions: function() {
            var that = this
            var circlePositions = {};
            this.circle.each(function(d) {
                circlePositions[d.sid] = {
                    x: Math.round(d.x),
                    y: Math.round(d.y)
                }
            })
            return JSON.stringify(circlePositions)
        },
        start: function() {
            var that = this;
            this.force = d3.layout.force().nodes(this.nodes).size([this.width, this.height])
            // this.circle.call(this.force.drag)
        },
        totalLayout: function() {
            var that = this;
            this.force.gravity(-0.01).charge(that.defaultCharge).friction(0.9).on("tick", function(e) {
                that.circle.each(that.totalSort(e.alpha)).each(that.buoyancy(e.alpha)).attr("cx", function(d) {
                    return d.x;
                }).attr("cy", function(d) {
                        return d.y;
                    });
            }).start();
        },
        relevantLayout: function() {
            var that = this;
            this.force.gravity(0).friction(0.9).charge(that.defaultCharge).on("tick", function(e) {
                that.circle.each(that.relevantSort(e.alpha)).each(that.buoyancy(e.alpha)).attr("cx", function(d) {
                    return d.x;
                }).attr("cy", function(d) {
                        return d.y;
                    });
            }).start();
        },
        discretionaryLayout: function() {
            var that = this;
            this.force.gravity(0).charge(0).friction(0.2).on("tick", function(e) {
                that.circle.each(that.discretionarySort(e.alpha)).attr("cx", function(d) {
                    return d.x;
                }).attr("cy", function(d) {
                        return d.y;
                    });
            }).start();
        },
        departmentLayout: function() {
            var that = this;
            this.force.gravity(0).charge(1).friction(0).on("tick", function(e) {
                that.circle
                    // .each(that.departmentSort(e.alpha))
                    // .each(that.collide(0.5))
                    .each(that.staticDepartment(e.alpha)).attr("cx", function(d) {
                        return d.x;
                    }).attr("cy", function(d) {
                        return d.y;
                    });
            }).start();
        },
        //
        //
        //
        comparisonLayout: function() {
            var that = this;
            this.force.gravity(0).charge(that.defaultCharge).friction(0.9).on("tick", function(e) {
                that.circle.each(that.comparisonSort(e.alpha)).attr("cx", function(d) {
                    return d.x;
                }).attr("cy", function(d) {
                        return d.y;
                    });
            }).start();
        },
        // ----------------------------------------------------------------------------------------
        // FORCES
        // ----------------------------------------------------------------------------------------
        totalSort: function(alpha) {
            var that = this;
            return function(d) {
                var targetY = that.centerY;
                var targetX = that.width / 2;
                if (d.isNegative) {
                    if (d.changeCategory > 0) {
                        d.x = -200
                    } else {
                        d.x = 1100
                    }
                }
                // if (d.positions.total) {
                //   targetX = d.positions.total.x
                //   targetY = d.positions.total.y
                // };
                d.y = d.y + (targetY - d.y) * (that.defaultGravity + 0.02) * alpha
                d.x = d.x + (targetX - d.x) * (that.defaultGravity + 0.02) * alpha
            };
        },
        buoyancy: function(alpha) {
            var that = this;
            return function(d) {
                // d.y -= 1000 * alpha * alpha * alpha * d.changeCategory
                // if (d.changeCategory >= 0) {
                //   d.y -= 1000 * alpha * alpha * alpha
                // } else {
                //   d.y += 1000 * alpha * alpha * alpha
                // }
                var targetY = that.centerY - (d.changeCategory / 3) * that.boundingRadius
                d.y = d.y + (targetY - d.y) * (that.defaultGravity) * alpha * alpha * alpha * 100
            };
        },
        relevantSort: function(alpha) {
            var that = this;
            return function(d) {
                var targetY = that.centerY;
                var targetX = 0;
                if (d.isNegative) {
                    if (d.changeCategory > 0) {
                        d.x = -200
                    } else {
                        d.x = 1100
                    }
                    return;
                }
                if (d.discretion === that.DISCRETIONARY) {
                    targetX = 550
                } else if ((d.discretion === that.relevant) || (d.discretion === that.NET_INTEREST)) {
                    targetX = 400
                } else {
                    targetX = 900
                };
                d.y = d.y + (targetY - d.y) * (that.defaultGravity) * alpha * 1.1
                d.x = d.x + (targetX - d.x) * (that.defaultGravity) * alpha * 1.1
            };
        },
        discretionarySort: function(alpha) {
            var that = this;
            return function(d) {
                var targetY = that.height / 2;
                var targetX = 0;
                if (d.isNegative) {
                    if (d.changeCategory > 0) {
                        d.x = -200
                    } else {
                        d.x = 1100
                    }
                    return;
                }
                if (d.discretion === "Discretionary") {
                    targetY = that.changeScale(d.change);
                    targetX = 100 + that.groupScale(d.group) * (that.width - 120);
                    if (isNaN(targetY)) {
                        targetY = that.centerY
                    };
                    if (targetY > (that.height - 80)) {
                        targetY = that.height - 80
                    };
                    if (targetY < 80) {
                        targetY = 80
                    };
                } else if ((d.discretion === "relevant") || (d.discretion === "Net interest")) {
                    targetX = -300 + Math.random() * 100;
                    targetY = d.y;
                } else {
                    targetX = 0
                };
                d.y = d.y + (targetY - d.y) * Math.sin(Math.PI * (1 - alpha * 10)) * 0.2
                d.x = d.x + (targetX - d.x) * Math.sin(Math.PI * (1 - alpha * 10)) * 0.1
            };
        },
        departmentSort: function(alpha) {
            var that = this;
            return function(d) {
                var targetY = 0,
                    targetX = 0;
                if (that.categoryPositionLookup[d.group]) {
                    targetY = that.categoryPositionLookup[d.group].y;
                    targetX = that.categoryPositionLookup[d.group].x;
                } else {};
                var r = Math.max(5, d.radius)
                d.y = d.y + (targetY - d.y) * (that.defaultGravity) * alpha * 0.5 * r
                d.x = d.x + (targetX - d.x) * (that.defaultGravity) * alpha * 0.5 * r
            };
        },
        staticDepartment: function(alpha) {
            var that = this;
            return function(d) {
                var targetY = 0;
                var targetX = 0;
                if (d.positions.department) {
                    targetX = d.positions.department.x;
                    targetY = d.positions.department.y;
                };
                d.y += (targetY - d.y) * Math.sin(Math.PI * (1 - alpha * 10)) * 0.6
                d.x += (targetX - d.x) * Math.sin(Math.PI * (1 - alpha * 10)) * 0.4
            };
        },
        comparisonSort: function(alpha) {
            var that = this;
            return function(d) {
                var targetY = that.height / 2;
                var targetX = 650;
                d.y = d.y + (targetY - d.y) * (that.defaultGravity) * alpha
                d.x = d.x + (targetX - d.x) * (that.defaultGravity) * alpha
            };
        },
        collide: function(alpha) {
            var that = this;
            var padding = 6;
            var quadtree = d3.geom.quadtree(this.nodes);
            return function(d) {
                var r = d.radius + that.maxRadius + padding,
                    nx1 = d.x - r,
                    nx2 = d.x + r,
                    ny1 = d.y - r,
                    ny2 = d.y + r;
                quadtree.visit(function(quad, x1, y1, x2, y2) {
                    if (quad.point && (quad.point !== d) && (d.group === quad.point.group)) {
                        var x = d.x - quad.point.x,
                            y = d.y - quad.point.y,
                            l = Math.sqrt(x * x + y * y),
                            r = d.radius + quad.point.radius;
                        if (l < r) {
                            l = (l - r) / l * alpha;
                            d.x -= x *= l;
                            d.y -= y *= l;
                            quad.point.x += x;
                            quad.point.y += y;
                        }
                    }
                    return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
                });
            };
        }
    }
};
// Choose Menue
var ebay = ebay || {};
var $j = jQuery;
ebay.ChooseList = function(node, changeCallback) {
    this.container = $j(node);
    this.selectedNode = null;
    this.currentIndex = null;
    this.onChange = changeCallback;
    this.elements = this.container.find('li');
    this.container.find('li').on('click', $j.proxy(this.onClickHandler, this));
    this.selectByIndex(0);
};
ebay.ChooseList.prototype.onClickHandler = function(evt) {
    evt.preventDefault();
    this.selectByElement(evt.currentTarget);
};
ebay.ChooseList.prototype.selectByIndex = function(i) {
    this.selectByElement(this.elements[i])
};
ebay.ChooseList.prototype.selectByElement = function(el) {
    if (this.selectedNode) {
        $j(this.selectedNode).removeClass("selected");
    };
    $j(el).addClass("selected");
    for (var i = 0; i < this.elements.length; i++) {
        if (this.elements[i] === el) {
            this.currentIndex = i;
        }
    };
    this.selectedNode = el;
    this.onChange(this);
};
/********************************
 ** FILE: base.js
 ********************************/
var $j = jQuery;
ebay.filename = function(index) {
    var tabs = ["total", "relevant", "discretionary", "department"];
    return tabs[index];
}
$j("#save").click(function() {
    $j.ajax({
        type: "POST",
        url: "/save",
        data: {
            'filename': ebay.filename(ebay.mainNav.currentIndex),
            'contents': ebay.c.getCirclePositions()
        }
    });
})
ebay.ready = function() {
    var that = this;
    ebay.c = new ebay.Chart();
    ebay.c.init();
    ebay.c.start();
    this.highlightedItems = [];
    var currentOverlay = undefined;
    ebay.mainNav = new ebay.ChooseList($j(".ebay-navigation"), onMainChange);

    function onMainChange(evt) {
        var tabIndex = evt.currentIndex
        if (this.currentOverlay !== undefined) {
            this.currentOverlay.hide();
        };
        if (tabIndex === 0) {
            ebay.c.totalLayout();
            this.currentOverlay = $j("#ebay-totalOverlay");
            this.currentOverlay.delay(300).fadeIn(500);
            $j("#ebayChartFrame").css({
                'height': 550
            });
        } else if (tabIndex === 1) {
            ebay.c.relevantLayout();
            this.currentOverlay = $j("#ebay-relevantOverlay");
            this.currentOverlay.delay(300).fadeIn(500);
            $j("#ebayChartFrame").css({
                'height': 550
            });
        } else if (tabIndex === 2) {
            ebay.c.discretionaryLayout();
            this.currentOverlay = $j("#ebay-discretionaryOverlay");
            this.currentOverlay.delay(300).fadeIn(500);
            $j("#ebayChartFrame").css({
                'height': 650
            });
        } else if (tabIndex === 4) {
            ebay.c.comparisonLayout();
            this.currentOverlay = $j("#ebay-comparisonOverlay");
            this.currentOverlay.delay(300).fadeIn(500);
            $j("#ebayChartFrame").css({
                'height': 650
            });
        } else if (tabIndex === 3) {
            ebay.c.departmentLayout();
            this.currentOverlay = $j("#ebay-departmentOverlay");
            this.currentOverlay.delay(300).fadeIn(500);
            $j("#ebayChartFrame").css({
                'height': 850
            });
        }
    }
}
if ( !! document.createElementNS && !! document.createElementNS('http://www.w3.org/2000/svg', "svg").createSVGRect) {
    $j(document).ready($j.proxy(ebay.ready, this));
} else {
    $j("#ebayChartFrame").hide();
    // $j("#ebay-error").show();
}