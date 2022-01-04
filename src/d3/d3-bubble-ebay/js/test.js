define([ 'jquery', 'underscore', 'backbone', 'config/config',
    'weblib/auth/js/utils/chartutils',
    'auth/js/views/dashboards/BaseDashboard',
    'text!auth/templates/dashboards/NikeStoreDashboardJordan.html',
    'i18n!auth/js/views/dashboards/nls/NikeStoreDashboard',
    'auth/js/events/DashboardEvent',
    'weblib/auth/js/events/TopicEvent',
    'auth/js/widgets/NikeBasicBarWidget',
    'auth/js/widgets/BasicVolumeWidget',
    'weblib/auth/js/widgets/aggregate/ConversationWidget',
    'weblib/auth/js/widgets/simple/BaseSimpleWidget',
    'auth/js/views/TopNav'
],
    function($,
        _,
        Backbone,
        config,
        cu,
        BaseDashboard,
        viewTemplate,
        nls,
        DashboardEvent,
        TopicEvent,
        BasicBarWidget,
        BasicVolumeWidget,
        ConversationWidget,
        TopInfluencersWidget,
        TopNav){
        var NikeStoreDashboard = BaseDashboard.extend({
            el : ('#content'),
            eventMap : {},
            initialize : function() {
                var _self = this;
                this.template = _.template(viewTemplate);
                _self.dashboardEvent = new DashboardEvent();
                _self.topicEvent = new TopicEvent();
                _self.wrstimer;
                $(window).resize(function(e) {
                    clearTimeout(_self.wrstimer);
                    _self.wrstimer = setTimeout(function() {
                        _self.windowResize(_self);
                    }, 300);
                });
                _.bindEventMap(_self.eventMap, window, 'beforeunload', function() {
                    _self.beforeClose();
                });
            },
            events : {

            },
            windowResize : function(_self) {
                // override if needed
            },
            postRender : function() {
                // override if needed
                var _self = this;
                _self.dateInterval = setInterval(function() {
                    $('#nikeDateWidget').html(moment().format('dddd MMMM Do YYYY, h:mm:ss a'));
                }, 1000);
                _self.topNav = new TopNav();
                _self.topNav.render();
                _self.timerInterval = new Date();
                setInterval(function() {
                    var timeOnSite = new Date() - _self.timerInterval;
                    var secondsTotal = timeOnSite / 1000;
                    var hours = Math.floor(secondsTotal / 3600);
                    var minutes = Math.floor(secondsTotal / 60) % 60;
                    var seconds = Math.floor(secondsTotal) % 60;
                    document.getElementById('nikeTimer').innerHTML = 'Time Since Refresh - ' + hours + "<small>h</small> : " + minutes + "<small>m</small> : " + seconds + '<small>s</small>';
                }, 1000);
                _self.conversationWidget = new ConversationWidget({
                    el : '#nikeConversationsChart',
                    loadHistoric : false,
                    updateData : function(_self, article) {
                        var _self = this;
                        if (_self.historicLoaded) {
                            _self.buffer.push(article);
                            if (_self.buffer.length > 30) {
                                _self.buffer = _self.buffer.splice(10,_self.buffer.length);
                            }
                            $('#' + _self.getHtmlID() + 'pages').show();
                            return;
                        } else {
                            if (!approuter.models.appArticleModel.paused
                                && article.outputType == 'REAL_TIME') {
                                if ($('#' + _self.getHtmlID() + 'conversationChartInner').children().length >= _self.listSize) {
                                    $('#' + _self.getHtmlID() + 'conversationChartInner').children().last().html('').empty().remove();
                                    _self.currentList.splice(11, _self.currentList.length - 11);
                                }
                                $('#' + _self.getHtmlID() + 'pageShownCon').hide();
                                // console.info(_self.getHtmlID()+'
                                // '+article.title);
                                $('#' + _self.getHtmlID() + 'conversationChartInner').prepend($(_self.formatTweet(article, false, false)));
                                _self.currentList.push(article);
                            } else {
                                _self.buffer.push(article);
                                if (_self.buffer.length > 30) {
                                    _self.buffer = _self.buffer.splice(10,_self.buffer.length);
                                }
                            }
                        }
                    },
                    formatTweet : function(t, demographics,siteicon) {
                        var _self = this;
                        return "<div class=\"tweet-div\"> <table class=\"tweet\"><tr>"
                            + "<td width=\"60\">"
                            + "<img width=\"48\" height=\"48\" src=\""
                            + (siteicon ? cu.getContentTypeIcon(t)
                            : t.authors[0].image_url)
                            + "\"/>"
                            + "</td><td><div class=\"tweet-username\">"
                            + t.authors[0].screen_name
                            + "<span class=\"tweet-name\">"
                            + t.authors[0].name
                            + "</span>"
                            + "<span class=\"tweet-name\">"
                            + (demographics && t.authors[0].traits.length > 0 ? "<a href=\""
                            + cu.getDemographicsUrl
                            + "\" target=\"_blank\" class=\"btn btn-success\" title=\"Demographics\" alt=\"Demographics\" style=\"padding:0px;width:16px;height:16px;\"><i class=\"icon-user icon-white\"></i></a>"
                            : '&nbsp;')
                            + "<a href=\""
                            + t.uri
                            + "\" title='Source' target=\"_blank\">"
                            + "<i class=\"icon-share\"></i>"
                            + "</a>"
                            + "</span>"
                            + "</div><div class=\"tweet-text\">"
                            + (t.body ? ('<b>'
                            + cu.truncate(t.title,40) + '</b><br/>')
                            : '')
                            + cu.truncate(cu.wordWrap(cu.checkForUrl(t.body,t) ? cu.checkForUrl(t.body,t) : cu.checkForUrl(t.title,t)), 500)
                            + "</div></td></tr><tr><td colspan=\"2\" style=\"line-height:4px;\"><img src=\"weblib/img/spacer.gif\" style=\"height:3px;\"></td></tr></table></div>"
                        ;
                    }
                });
                _self.conversationWidget.render();
                _self.topInfluencers = new TopInfluencersWidget({
                    loadHistoric : false,
                    showChartTitle : false,
                    filterKey : '',
                    intDur : 600000,
                    init : function() {
                        // start timer to clear top
                        // influencers
                        var _self = this;
                        setInterval(function() {
                            _self.data = {};
                            for ( var i = 0; i < 6; i++) {
                                $("#influencer" + i).html();
                            }
                        }, _self.intDur);
                    },
                    updateData : function(_self, article) {
                        if (_self.preUpdateData(_self, article)) {
                            _self.data[article.authors[0].screen_name] = {
                                "article" : article,
                                "followers" : article.metrics.followers
                            };
                            var topInfluencers = _self.sortResults(_self);
                            topInfluencers.sort(function(a, b) {
                                a = parseInt(a.value.followers);
                                b = parseInt(b.value.followers);
                                return a < b ? 1 : (a > b ? -1 : 0);
                            });
                            topInfluencers = topInfluencers.splice(0, 5);
                            // set the top influencers to
                            // the divs now
                            var i = 0;
                            for ( var tweet in topInfluencers) {
                                $("#influencer" + i).html(_self.formatTweet(topInfluencers[tweet].value.article,true,false));
                                i++;
                            }
                        }
                    },
                    formatTweet : function(t, demographics,siteicon) {
                        return "<div class=\"tweet-div\"> <table class=\"tweet\"><tr>"
                            + "<td width=\"60\">"
                            + "<img width=\"48\" height=\"48\" src=\"" + (siteicon ? cu.getContentTypeIcon(t) : t.authors[0].image_url) + "\"/>"
                            + "</td><td><div class=\"tweet-username\">"
                            + t.authors[0].screen_name
                            + "<span class=\"tweet-name\">"
                            + t.authors[0].name
                            + "</span>"
                            + "<span class=\"tweet-name\">" + (demographics && t.authors[0].traits.length > 0 ? "<a href=\"" + cu.getDemographicsUrl + "\" target=\"_blank\" class=\"btn btn-success\" title=\"Demographics\" alt=\"Demographics\" style=\"padding:0px;width:16px;height:16px;\"><i class=\"icon-user icon-white\"></i></a>" : '&nbsp;')
                            + " Followers: "
                            + t.metrics.followers
                            + " "
                            + "</span>"
                            + "</div>" +
                            "<div class=\"tweet-text\">"
                                + (t.body ? ('<b>' + cu.truncate(t.title,40) + '</b><br/>') : '') + cu.truncate(cu.wordWrap(cu.checkForUrl(t.body,t) ? cu.checkForUrl(t.body,t) : cu.checkForUrl(t.title,t)), 500)
                            + "</div>" +
                            "</td></tr><tr><td colspan=\"2\" style=\"line-height:4px;\"><img src=\"weblib/img/spacer.gif\" style=\"height:3px;\"></td></tr></table></div>"
                        ;
                    }
                });
                _self.posSentimentBarWidget = new BasicBarWidget({
                    el : "#featuresSentimentPosChart",
                    filterKey : '',
                    filter : [ 'ORDER_EASY',
                        'ORDER_QUESTIONS',
                        'ORDER_SUCCESS',
                        'GOOD_EXPERIENCE',
                        'COPPED_A_PAIR', 'GREAT_SHOES',
                        'LOVE_NIKESTORE',
                        'GET_CONFIRM_EMAIL','PROCESS_QUICK',
                        'RSVP_REQUEST','RESTOCK_REQUEST','WEBSITE_GREAT' ],
                    loadHistoric : false,
                    chartTitleText : "",
                    showExportDataBtn : false,
                    vertical : false,
                    showChartTitle : false,
                    totalPos:0,
                    totalVol:0,
                    tOff:16,
                    limit:10,
                    chartTextSize:14,
                    valueTextColor:'green',
                    overTextColor:'#FFF',
                    underTextColor:'green',
                    rectCSS:'stroke:green;stroke-width:2px;',
                    colorRange:['green'],
                    updateData : function(_self, article) {
                        if (_self.preUpdateData(_self,article)) {
                            var multi = (approuter.globals.rtvars && approuter.globals.rtvars.multi)?approuter.globals.rtvars.multi:1; //for throttling
                            for(var ent in article.entities){
                                var filterIn=_self.checkFilterInn(_self,article.entities[ent].domain_role);
                                if(filterIn){
                                    if(_self.data[article.entities[ent].domain_role]){
                                        _self.data[article.entities[ent].domain_role] = _self.data[article.entities[ent].domain_role] + multi;
                                        _self.totalPos++;
                                    }else{
                                        _self.data[article.entities[ent].domain_role] = multi;
                                        _self.totalPos++;
                                    }
                                }
                            }
                            _self.hasData=true;
                        }
                        $('#totalSentimentPos').html(_self.totalPos);
                        for(var ent in article.entities){
                            _self.totalVol++;
                        }
                        $('#totalEntityVolume').html(_self.totalVol);
                    },
                    checkFilterInn : function(_self, value) {
                        var matches = false;
                        var ind = _self.filter.indexOf(value);
                        if (ind > -1) {
                            matches = true;
                        }
                        return matches;
                    }
                });
                _self.posSentimentBarWidget.render();
                _self.negSentimentBarWidget = new BasicBarWidget({
                    el : "#featuresSentimentNegChart",
                    filterKey : '',
                    filter : [ 'WEBSITE_CRASH',
                        'WEBSITE_FREEZE',
                        'CAR_INCORRECT',
                        'CHECKOUT_FAILED',
                        'GETTING_ERROR',
                        'NOT_GET_CONFIRMED_EMAIL',
                        'SOLD_OUT', 'LOGIN_FAIL',
                        'PAYPAL_ERROR',
                        'CREDIT_CARD_ERROR',
                        'DEBIT_CARD_ERROR',
                        'POOR_EXPERIENCE',
                        'LINK_NOT_WORK',
                        'GIFT_CARD_ISSUE',
                        'NO_TEXT_NOTIFICATION','ORDER_FAIL',
                        'CRY_FOR_HELP',
                        'POOR_COMMUNICATION' ],
                    loadHistoric : false,
                    chartTitleText : "",
                    showExportDataBtn : false,
                    vertical : false,
                    showChartTitle : false,
                    totalNeg:0,
                    tOff:16,
                    limit:10,
                    chartTextSize:14,
                    valueTextColor:'#CC4A6F',
                    overTextColor:'#FFF',
                    underTextColor:'#CC4A6F',
                    rectCSS:'stroke:#CC4A6F;stroke-width:2px;',
                    colorRange:['#CC4A6F'],
                    updateData : function(_self, article) {
                        if (_self.preUpdateData(_self,article)) {
                            var multi = (approuter.globals.rtvars && approuter.globals.rtvars.multi)?approuter.globals.rtvars.multi:1; //for throttling
                            for(var ent in article.entities){
                                var filterIn=_self.checkFilterInn(_self,article.entities[ent].domain_role);
                                if(filterIn){
                                    if(_self.data[article.entities[ent].domain_role]){
                                        _self.data[article.entities[ent].domain_role] = _self.data[article.entities[ent].domain_role] + multi;
                                        _self.totalNeg++;
                                    }else{
                                        _self.data[article.entities[ent].domain_role] = multi;
                                        _self.totalNeg++;
                                    }
                                }
                            }
                            _self.hasData=true;
                        }
                        $('#totalSentimentNeg').html(_self.totalNeg);
                    },
                    checkFilterInn : function(_self, value) {
                        var matches = false;
                        var ind = _self.filter.indexOf(value);
                        if (ind > -1) {
                            matches = true;
                        }
                        return matches;
                    }
                });
                _self.negSentimentBarWidget.render();

                _self.volumeWidget = new BasicVolumeWidget({
                    el : "#nikeStoreVolumeChart",
                    filterKey : 'volume',
                    loadHistoric : false,
                    showLegend : false,
                    showExportDataBtn : false,
                    showChartTitle : false,
                    chartTitleText : 'Volume Chart',
                    limit : 121,
                    frequency : 30000,
                    xAxisTicks : 0,
                    yAxisTextCSS : 'fill:white;',
                    xAxisTextCSS : 'fill:none;',
                    colorRange : [ "#ff9900" ]
                });
                _self.volumeWidget.render();
            },
            checkFilterInn : function(_self, value) {
                var matches = false;
                var ind = _self.orderingThemes.indexOf(article.entities[idx].domain_role);
                if (ind > -1) {
                    matches = true;
                }
                return matches;
            },
            postRedraw : function(_self) {

            },
            beforeClose : function(_self) {
                var _self = _self ? _self : this;
                _self.topNav.beforeClose();
                _self.conversationWidget.beforeClose();
                _self.posSentimentBarWidget.beforeClose();
                _self.negSentimentBarWidget.beforeClose();
                _self.topInfluencers.beforeClose();
                clearTimeout(_self.wstimer);
                clearInterval(_self.dateInterval);
                _.unbindEventMap(_self.eventMap);
                _self.$el.html("");
                _self.unbind();
                _self.undelegateEvents();

            }
        });
        return NikeStoreDashboard;
    });
