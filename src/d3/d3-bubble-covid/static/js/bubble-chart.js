function bubbleChart() {
  // Constants for sizing
  let width = 640;
  let height = 640;

  // tooltip for mouseover functionality
  let tooltip = floatingTooltip('bubble_tooltip', 240);

  // Locations to move bubbles towards, depending
  // on which view mode is selected.
  let center = { x: width / 2, y: height / 2 };

  let yearCenters = {
    2008: { x: width / 3, y: height / 2 },
    2009: { x: width / 2, y: height / 2 },
    2010: { x: (2 * width) / 3, y: height / 2 },
  };

  // X locations of the year titles.
  let yearsTitleX = {
    2008: 160,
    2009: width / 2,
    2010: width - 160,
  };

  // @v4 strength to apply to the position forces
  let forceStrength = 0.03;

  // These will be set in create_nodes and create_vis
  let svg = null;
  let bubbles = null;
  let nodes = [];

  function charge(d) {
    return -Math.pow(d.radius, 2.0) * forceStrength;
  }

  let simulation = d3
    .forceSimulation()
    .velocityDecay(0.2)
    .force('x', d3.forceX().strength(forceStrength).x(center.x))
    .force('y', d3.forceY().strength(forceStrength).y(center.y))
    .force('charge', d3.forceManyBody().strength(charge))
    .on('tick', ticked);

  // @v4 Force starts up automatically,
  //  which we don't want as there aren't any nodes yet.
  simulation.stop();

  function createNodes(_data) {
    // max bubble radius set by d.cases.total (total reported people infected with covid-19 virus)
    const max = d3.max(_data, function (d) {
      return +d.cases.total;
    });

    const scale = d3.scalePow().exponent(0.5).range([2, 85]).domain([0, max]);

    const keys = [
      'date',
      'state',
      'meta.data_quality_grade',
      'meta.updated',
      'meta.tests.total_source',
      'cases.total',
      'cases.confirmed',
      'cases.probable',
      'tests.pcr.total',
      'tests.pcr.pending',
      'tests.pcr.encounters.total',
      'tests.pcr.specimens.total',
      'tests.pcr.specimens.positive',
      'tests.pcr.specimens.negative',
      'tests.pcr.people.total',
      'tests.pcr.people.positive',
      'tests.pcr.people.negative',
      'tests.antibody.encounters.total',
      'tests.antibody.encounters.positive',
      'tests.antibody.encounters.negative',
      'tests.antibody.people.total',
      'tests.antibody.people.positive',
      'tests.antibody.people.negative',
      'tests.antigen.encounters.total',
      'tests.antigen.encounters.positive',
      'tests.antigen.encounters.negative',
      'tests.antigen.people.total',
      'tests.antigen.people.positive',
      'tests.antigen.people.negative',
      'outcomes.recovered',
      'outcomes.hospitalized.total',
      'outcomes.hospitalized.currently',
      'outcomes.hospitalized.in_icu.total',
      'outcomes.hospitalized.in_icu.currently',
      'outcomes.hospitalized.on_ventilator.total',
      'outcomes.hospitalized.on_ventilator.currently',
      'outcomes.death.total',
      'outcomes.death.confirmed',
      'outcomes.death.probable',
    ];



    const bubbles = _data.map(function (d, i) {
      return {
        // bubble props
        radius: scale(+d.cases.total),
        value: +d.cases.total,
        x: Math.random() * 900,
        y: Math.random() * 800,

        // COVID-19 API data props
      };
    });

    console.log(bubbles[0])

    // sort them to prevent occlusion of smaller nodes.
    bubbles.sort(function (a, b) {
      return b.value - a.value;
    });

    return bubbles;
  }

  /*
   * Main entry point to the bubble chart. This function is returned
   * by the parent closure. It prepares the _data for visualization
   * and adds an svg element to the provided selector and starts the
   * visualization creation process.
   *
   * selector is expected to be a DOM element or CSS selector that
   * points to the parent element of the bubble chart. Inside this
   * element, the code will add the SVG container for the visualization.
   *
   * _data is expected to be an array of data objects as provided by
   * a d3 loading function like d3.csv.
   */

  const colorRange = d3.schemeRdBu[9];
  const color = d3.scaleOrdinal().range(colorRange);

  const chart = function chart(selector, response) {
    // convert raw data into nodes data
    console.log(response);
    nodes = createNodes(response.data);

    // Create a SVG element inside the provided selector
    // with desired size.
    svg = d3.select(selector).append('svg').attr('width', width).attr('height', height);

    // Bind nodes data to what will become DOM elements to represent them.
    bubbles = svg.selectAll('.bubble').data(nodes, function (d) {
      return d.id;
    });

    // Create new circle elements each with class bubble.
    // There will be one circle.bubble for each object in the nodes array.
    // Initially, their radius (r attribute) will be 0.
    // @v4 Selections are immutable, so lets capture the
    //  enter selection to apply our transtition to below.
    const bubblesE = bubbles
      .enter()
      .append('circle')
      .classed('bubble', true)
      .attr('r', 0)
      .attr('fill', (d) => color(d.state))
      .attr('stroke', (d) => color(d.state))
      .attr('stroke-width', 2)
      .on('mouseover', tooltipDetail)
      .on('mouseout', hideDetail);

    // @v4 Merge the original empty selection and the enter selection
    bubbles = bubbles.merge(bubblesE);

    // Fancy transition to make bubbles appear, ending with the
    // correct radius
    bubbles
      .transition()
      .duration(2000)
      .attr('r', function (d) {
        return d.radius;
      });

    // Set the simulation's nodes to our newly created nodes array.
    // @v4 Once we set the nodes, the simulation will start running automatically!
    simulation.nodes(nodes);

    // Set initial layout to single group.
    groupBubbles();
  };

  /*
   * Callback function that is called after every tick of the
   * force simulation.
   * Here we do the acutal repositioning of the SVG circles
   * based on the current x and y values of their bound node data.
   * These x and y values are modified by the force simulation.
   */
  function ticked() {
    bubbles
      .attr('cx', function (d) {
        return d.x;
      })
      .attr('cy', function (d) {
        return d.y;
      });
  }

  /*
   * Provides a x value for each node to be used with the split by year
   * x force.
   */
  function nodeYearPos(d) {
    return yearCenters[d.year].x;
  }

  /*
   * Sets visualization in "single group mode".
   * The year labels are hidden and the force layout
   * tick function is set to move all nodes to the
   * center of the visualization.
   */
  function groupBubbles() {
    hideYearTitles();

    // @v4 Reset the 'x' force to draw the bubbles to the center.
    simulation.force('x', d3.forceX().strength(forceStrength).x(center.x));

    // @v4 We can reset the alpha value and restart the simulation
    simulation.alpha(1).restart();
  }

  /*
   * Sets visualization in "split by year mode".
   * The year labels are shown and the force layout
   * tick function is set to move nodes to the
   * yearCenter of their data's year.
   */
  function splitBubbles() {
    showYearTitles();

    // @v4 Reset the 'x' force to draw the bubbles to their year centers
    simulation.force('x', d3.forceX().strength(forceStrength).x(nodeYearPos));

    // @v4 We can reset the alpha value and restart the simulation
    simulation.alpha(1).restart();
  }

  /*
   * Hides Year title displays.
   */
  function hideYearTitles() {
    svg.selectAll('.year').remove();
  }

  /*
   * Shows Year title displays.
   */
  function showYearTitles() {
    // Another way to do this would be to create
    // the year texts once and then just hide them.
    let yearsData = d3.keys(yearsTitleX);
    let years = svg.selectAll('.year').data(yearsData);

    years
      .enter()
      .append('text')
      .attr('class', 'year')
      .attr('x', function (d) {
        return yearsTitleX[d];
      })
      .attr('y', 40)
      .attr('text-anchor', 'middle')
      .text(function (d) {
        return d;
      });
  }

  /*
   * Helper function to convert a number into a string
   * and add commas to it to improve presentation.
   */
  function addCommas(nStr) {
    nStr += '';
    let x = nStr.split('.');
    let x1 = x[0];
    let x2 = x.length > 1 ? '.' + x[1] : '';
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
  }

  function tooltipDetail(d) {
    let date = new Date(d.lastUpdateEt).toDateString();

    // TODO - add map func for props
    let keys = _.keys(d);
    let omit = ['radius', 'value', 'x', 'y', 'index', 'vy', 'vx'];
    let set = new Set(omit);

    let content =
      '<div class="card p-4 tooltip--d3" style="width: 240px">' +
      `<div class="h3 text-pink">${d.state}</div>` +
      `<div>
        <span class="text-grey mt-12">Positive</span>
        <span class="fr">${addCommas(d.positive)}</span>
      </div>` +
      `<div>
        <span class="text-grey mt-12">Recovered</span>
        <span class="fr">${addCommas(d.recovered)}</span>
      </div>` +
      `<div>
        <span class="text-grey mt-12">Deaths</span>
        <span class="fr">${addCommas(d.death)}</span>
      </div>` +
      `<div>
        <div class="divider--sm w100 mv-24"></div>
      </div>` +
      `<div>
        <span class="text-grey mt-12 mr-12">Hospitalized</span>
        <span class="fr">${addCommas(d.hospitalized)}</span>
      </div>` +
      `<div class="mt24">
        <div class="text-grey text-xs">Last Update</div>
        <div class="text-pink">${date}</div>
      </div>` +
      '';

    tooltip.showTooltip(content, d3.event);
  }

  /*
   * Hides tooltip
   */
  function hideDetail(d) {
    tooltip.hideTooltip();
  }

  /*
   * Externally accessible function (this is attached to the
   * returned chart function). Allows the visualization to toggle
   * between "single group" and "split by year" modes.
   *
   * displayName is expected to be a string and either 'year' or 'all'.
   */
  chart.toggleDisplay = function (displayName) {
    if (displayName === 'year') {
      splitBubbles();
    } else {
      groupBubbles();
    }
  };

  // return the chart function from closure.
  return chart;
}

/**
 * _bubbleChart Init main constant
 * */
const _bubbleChart = bubbleChart();

/**
 * display - render bubble chart
 * @param  {string} error
 * @param  {array} data
 * @return {void}
 */
function display(data) {
  _bubbleChart('#bubble_chart', data);
}

/*
 * Sets up the layout buttons to allow for toggling between view modes.
 */
function setupButtons() {
  d3.select('#toolbar')
    .selectAll('.button')
    .on('click', function () {
      // Remove active class from all buttons
      d3.selectAll('.button').classed('active', false);

      // Find the button just clicked
      let button = d3.select(this);

      // Set it as the active button
      button.classed('active', true);

      // Get the id of the button
      let buttonId = button.attr('id');

      // Toggle the bubble chart based on
      // the currently clicked button.
      _bubbleChart.toggleDisplay(buttonId);
    });
}

async function getData() {
  const url = 'static/data/covid-daily.json';
  try {
    return await axios.get(url);
  } catch (err) {
    console.error('ERROR: ', err);
  }
}

const init = new Promise(async function (resolve) {
  let res = await getData();
  resolve(res.data);
});

init.then(function (res) {
  display(res);
  setupButtons();
});
