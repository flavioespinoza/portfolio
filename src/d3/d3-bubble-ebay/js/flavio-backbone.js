/**
 * Created with IntelliJ IDEA.
 * File: flavio-backbone.js
 * User: flavor
 * Name: S. Flavio Espinoza
 * URL: flavioespinoza.com
 * Date: 10/3/12
 * Time: 4:45 PM
 **/


//=========== HTML Element Generator ===========

// NOTE: OPENING AND CLOSING HTML TAGS -- $('<a></a>' -- ARE USED TO HEDGE AGAINST
// PROBLEMS SPECIFIC TO IE WHEN USING THE MORE COMMONLY USED -- $('<a/>' -- METHOD

var CoxNavView = Backbone.View.extend({
    el:'#coxNav',

    initialize:function () {

        _.bindAll(this, 'render');
        this.render();

    },

    render:function () {

        var coxCategoriesLink;
        coxCategoriesLink = $('<a></a>', {
            id:"coxCategories",
            href:"#"
        });

        var coxBreadcrumbNews;
        coxBreadcrumbNews = $('<a></a>', {
            "class":"cox-breadcrumb-news",
            href:"#",
            text:"NEWS"
        }).append('<span> > </span>');

        var coxBreadcrumbHome;
        coxBreadcrumbHome = $('<a></a>', {
            id:"homeLink",
            "class":"cox-breadcrumb-home list-view-link",
            href:"#",
            text:"HOME"
        }).append('<span> > </span>');

        var coxBreadcrumbLiCategory;
        coxBreadcrumbLiCategory = $('<li></li>', {
            "class":"coxCategory-li"
        }).append(coxCategoriesLink);

        var coxBreadcrumbLiNews;
        coxBreadcrumbLiNews = $('<li></li>', {
            "class":"cox-breadcrumb-li"
        }).append(coxBreadcrumbNews);

        var coxBreadcrumbLiHome;
        coxBreadcrumbLiHome = $('<li></li>', {
            "class":"cox-breadcrumb-li"
        }).append(coxBreadcrumbHome);

        var coxBreadcrumbNav;
        coxBreadcrumbNav = $('<ul></ul>', {
            "class":"breadcrumb cox-breadcrumb-ul"
        }).append(coxBreadcrumbLiHome)
            .append(coxBreadcrumbLiNews)
            .append(coxBreadcrumbLiCategory)

        ;

        this.$el.append(coxBreadcrumbNav);

    }

});

var CoxTitleView = Backbone.View.extend({

    el:'#coxTitle',

    initialize:function () {
        _.bindAll(this, 'render');
        this.render();

    },

    render:function () {

        var coxTitle;
        coxTitle = $('<h2></h2>', {
            "class":"cox-title"
        });

        this.$el.append(coxTitle);

    }

});

var CoxUpdateView = Backbone.View.extend({

    el:'#coxUpdateBox',

    initialize:function () {

        _.bindAll(this, 'render');
        this.render();

    },

    render:function () {

        var coxUpdateText;
        coxUpdateText = $('<p></p>', {
            "class":"cox-update-text",
            text:"UPDATED:"
        });

        var coxUpdate;
        coxUpdate = $('<p></p>', {
            "class":"cox-update"
        });

        var coxSpacer;
        coxSpacer = $('<span></span>', {
            "class":"cox-spacer",
            html:"<p>&#124<p/>"
        });

        var coxPostedText;
        coxPostedText = $('<p></p>', {
            "class":"cox-posted-text",
            text:"POSTED:"
        });

        var coxPosted;
        coxPosted = $('<p></p>', {
            "class":"cox-posted"
        });

        var coxUpdateDiv;
        coxUpdateDiv = $('<div></div>', {
            id:"coxUpdate"
        }).append(coxUpdateText).append(coxUpdate);

        var coxPostedDiv;
        coxPostedDiv = $('<div></div>', {
            id:"coxPosted"
        }).append(coxPostedText).append(coxPosted);

        this.$el.append(coxUpdateDiv)
            .append(coxSpacer)
            .append(coxPostedDiv)
        ;

    }

});

var CoxImageMainView = Backbone.View.extend({

    el:'#coxImageMain',

    initialize:function () {

        _.bindAll(this, 'render');
        this.render();

    },

    render:function () {

        var coxImageMainCredit;
        coxImageMainCredit = $('<p></p>', {
            "class":"cox-image-main-credit"
        });

        var coxImageMainCaption;
        coxImageMainCaption = $('<p></p>', {
            "class":"cox-image-main-caption"
        });

        var coxImageMain;
        coxImageMain = $('<img/>', {
            "class":"cox-image-main"
        });

        var coxImageMainBox;
        coxImageMainBox = $('<div></div>', {
            "class":"cox-image-main-box"
        }).append(coxImageMainCredit).append(coxImageMain);

        this.$el.append(coxImageMainBox).append(coxImageMainCaption);

    }
});

var CoxSocialView = Backbone.View.extend({

    el:'#coxSocial',

    initialize:function () {

        _.bindAll(this, 'render');
        this.render();

    },

    render:function () {

        //SOCIAL ICON <img> IMAGES ==============================================
        var coxSocialIconComment;
        coxSocialIconComment = $('<a></a>', {
            id:"coxSocialIconComment",
            "class":"cox-social-icon-comment"
        });

        var coxSocialIconShare;
        coxSocialIconShare = $('<a></a>', {
            id:"coxSocialIconShare",
            "class":"cox-social-icon-share"
        });

        var coxSocialIconFavorite;
        coxSocialIconFavorite = $('<a></a>', {
            id:"coxSocialIconFavorite",
            "class":"cox-social-icon-favorite"
        });

        var coxSocialIconVote;
        coxSocialIconVote = $('<a></a>', {
            id:"coxSocialIconVote",
            "class":"cox-social-icon-vote"
        });

        //ANCHOR TAG <a> LINKS ==============================================
        var coxSocialComment;
        coxSocialComment = $('<a></a>', {
            id:"coxSocialComment",
            "class":"cox-social-comment",
            text:"COMMENT",
            href:"#"
        }).append(coxSocialIconComment);

        var coxSocialShare;
        coxSocialShare = $('<a></a>', {
            id:"coxSocialShare",
            "class":"cox-social-share",
            text:"SHARE",
            href:"#"
        }).append(coxSocialIconShare);

        var coxSocialFavorite;
        coxSocialFavorite = $('<a></a>', {
            id:"coxSocialFavorite",
            "class":"cox-social-favorite",
            text:"FAVORITE",
            href:"#"
        }).append(coxSocialIconFavorite);

        var coxSocialVote;
        coxSocialVote = $('<a></a>', {
            id:"coxSocialVote",
            "class":"cox-social-vote",
            text:"VOTE",
            href:"#"
        }).append(coxSocialIconVote);

        //SOCIAL <div> CONTAINERS ==============================================

        // COMMENT ==============================================
        var coxSocialBoxComment;
        coxSocialBoxComment = $('<li></li>', {
            id:"coxSocialBoxComment",
            "class":"cox-social-box-comment"
        }).append(coxSocialComment);

        // SHARE ==============================================
        var coxSocialBoxShare;
        coxSocialBoxShare = $('<li></li>', {
            id:"coxSocialBoxShare",
            "class":"cox-social-box-share"
        }).append(coxSocialShare);

        // FAVORITE ==============================================
        var coxSocialBoxFavorite;
        coxSocialBoxFavorite = $('<li></li>', {
            id:"coxSocialBoxFavorite",
            "class":"cox-social-box-favorite"
        }).append(coxSocialFavorite);

        // VOTE ==============================================
        var coxSocialBoxVote;
        coxSocialBoxVote = $('<li></li>', {
            id:"coxSocialBoxVote",
            "class":"cox-social-box-vote"
        }).append(coxSocialVote);

        //ELEMENT APPEND ==============================================
        this.$el.append(coxSocialBoxComment)
            .append(coxSocialBoxShare)
            .append(coxSocialBoxFavorite)
            .append(coxSocialBoxVote)

        ;

    }

});

var CoxAuthorView = Backbone.View.extend({

    el:'#coxAuthor',

    initialize:function () {
        _.bindAll(this, 'render');
        this.render();

    },

    render:function () {

        var coxAuthorBy;
        coxAuthorBy = $('<p></p>', {
            "class":"cox-author-by",
            text:"BY : "
        });

        var coxAuthor;
        coxAuthor = $('<a></a>', {
            "class":"cox-author"
        });

        this.$el.append(coxAuthorBy).append(coxAuthor);
    }

});

var CoxStoryView = Backbone.View.extend({

    el:'#coxStory',

    initialize:function () {

        _.bindAll(this, 'render');
        this.render();

    },

    render:function () {

        var coxStoryText;
        coxStoryText = $('<div></div>', {
            id:"coxStoryText",
            "class":"cox-story-text"
        });

        this.$el.append(coxStoryText);

    }

});

$(document).ready(function () {

    var coxNavView = new CoxNavView();
    var coxTitleView = new CoxTitleView();
    var coxUpdateView = new CoxUpdateView();
    var coxImageMainView = new CoxImageMainView();
    var coxSocialView = new CoxSocialView();
    var coxAuthorView = new CoxAuthorView();
    var coxStoryView = new CoxStoryView();

});


//=========== Navigation Control and Data Loader ===========
$(function () {

    CoxLayoutModel = Backbone.Model;

    CoxLayoutCollection = Backbone.Collection.extend({

        model:CoxLayoutModel

    });

    // Generates header links for "TODAY'S TOP NEWS STORIES"
    CoxLayoutCollectionView = Backbone.View.extend({

        el:$("#coxTickerUL"),

        // Generates new anchor text if new news stories are added to the
        // coxNewsData list in the uidevtest-data.js and binds them to the collection
        initialize:function () {

            this.collection.bind('add', this.createCoxNewsTickerItem, this);

        },

        // Click function that calls for the link's corresponding news story
        events:{

            'click .cox-ticker-links':'selectNewsStory'

        },

        // Generates the HTML elements for the anchor links
        createCoxNewsTickerItem:function (model) {

            var coxNewsTickerUpdated;
            coxNewsTickerUpdated = $('<p></p>', {
                id:model.cid,
                "class":"cox-ticker-updated"
            }).append("Updated: " + model.get('pub_date'));

            var coxNewsTickerPosted;
            coxNewsTickerPosted = $('<p></p>', {
                id:model.cid,
                "class":"cox-ticker-posted"
            }).append("Posted: " + model.get('pub_date'));

            var coxNewsTickerCategory;
            coxNewsTickerCategory = $('<p></p>', {
                id:model.cid,
                "class":"cox-ticker-category"
            }).append("Category / " + model.get('categories_name'));

            var coxNewsTickerLinks;
            coxNewsTickerLinks = $('<a></a>', {
                id:model.cid,
                "class":"cox-ticker-links",
                text:model.get('summary'),
                url: model.get('url_href')
            });

            var coxOffset;
            coxOffset = $('<div></div>', {
                "class":"cox-offset"
            });

            var coxNewsTickerList;
            coxNewsTickerList = $('<li></li>', {
                "class":"cox-ticker-list"
            }).append(coxOffset)
                .append(coxNewsTickerLinks)
                .append(coxNewsTickerCategory)
                .append(coxNewsTickerPosted)
                .append(coxNewsTickerUpdated)
            ;

            var coxNewsTickerImage;
            coxNewsTickerImage = $('<img/>', {
                "class":"cox-ticker-image-main",
                src:model.get('lead_photo_image_thumb')
            });
            var coxNewsTickerImageList;
            coxNewsTickerImageList = $('<div></div>', {
                "class":"cox-ticker-image-list"
            }).append(coxNewsTickerImage);

            var coxTickerImageFrame;
            coxTickerImageFrame = $('<div></div>', {
                "class":"cox-ticker-image-frame"
            });

            var coxNewsListBoxes;
            coxNewsListBoxes = $('<div></div>', {
                id:model.cid,
                "class": "cox-ticker-list-box row-fluid"
            }).append(coxTickerImageFrame)
                .append(coxNewsTickerImageList)
                .append(coxNewsTickerList)
            ;

            this.$("#coxTickerLI").append(coxNewsListBoxes);

        },


        selectNewsStory:function (event) {

            // Note: The 'id' for the news story links and corresponding data is set by the model.cid
            // This is only done on the front end for design purposes
            // This is changed when the application is tied to the back end
            var cid = $(event.target).attr('id');

            // This triggers the link responsible for the animation on the Home page
            var animationTriggerLink = $('.story-view-link').trigger('click');

            // The selector class ".story-view-link" is then removed
            var removeTriggerLink = $('#storyViewTriggerHidden').removeClass('story-view-link');

            // This: 1) Gets news story by CID, 2) Transitions from list-view to story-view, 3) Removes class selector from trigger link
            this.trigger('new-news-story', this.collection.getByCid(cid), animationTriggerLink, removeTriggerLink);

        },


        // Renders the anchor links of News Stories
        render:function () {

            var self = this;
            this.collection.each(function (model) {
                self.createCoxNewsTickerItem(model);
            });

            return this;

        }

    });

    // Populates the HTML elements generated by Backbone with data from the uidevtest-data.js
    CoxLayoutView = Backbone.View.extend({

        // This el: (short for "element") is the id for the main div container that houses all elements rendered in the HTML
        // This is the table that the newspaper will be laid out on
        el:$("#coxLayout"),

        initialize:function (options) {
            this.eventSource = options.newCoxLayoutEventSource;
            this.eventSource.bind('new-news-story', this.loadAndRenderCoxLayout, this);
        },

        load:function (model) {
            this.model = model;
            return this;
        },

        render:function () {
            // These variables are organized into separate data object variables and jQuery selectors

            // This allows a data object such as the author's name/link to be rendered
            // at the top and bottom of the story if one found it necessary

            // uidevtestDataObject = Data objects parsed from the uidevtest-data.js
            // These variables = this.model.get('uidevtestDataObject');
            var dataSummary = this.model.get('summary');
            var dataTitle = this.model.get('title');
            var dataAuthor = this.model.get('author');
            var dataPhotoCaption = this.model.get('lead_photo_caption');
            var dataLeadPhotoCredit = this.model.get('lead_photo_credit');
            var dataCategories = this.model.get('categories_name');
            var dataPosted = this.model.get('pub_date');
            var dataUpdated = this.model.get('updated');
            var dataStory = this.model.get('story');
            var dataTopics = this.model.get('topics');
            var dataStatus = this.model.get('status');
            var dataLeadPhoto = this.model.get('lead_photo_image_url');
            var dataLeadPhotoThumb = this.model.get('lead_photo_image_thumb');
            var dataUrlPath = this.model.get('url_path');


            // These variables = jQuerySelectors
            var $summary = $("#");
            var $title = $('#coxTitle .cox-title');
            var $author = $('#coxAuthor .cox-author');
            var $photoCaption = $('#coxImageMain .cox-image-main-caption');
            var $leadPhotoCredit = $('#coxImageMain .cox-image-main-credit');
            var $categories = $('#coxCategories');
            var $posted = $('#coxPosted .cox-posted');
            var $updated = $('#coxUpdate .cox-update');
            var $story = $('#coxStory');
            var $topics = $('#coxTopics');
            var $status = $('#coxStatus');
            var $leadPhoto = $('#coxImageMain .cox-image-main');
            var $leadPhotoThumb = $('#coxImageMainThumb');
            var $urlPath = $('#coxUrlPath');


            // jQuerySelector.jQueryMethod(uidevtestDataObject);
            $summary.html(dataSummary);
            $title.html(dataTitle);
            $author.html(dataAuthor);
            $photoCaption.html(dataPhotoCaption);
            $leadPhotoCredit.html(dataLeadPhotoCredit);
            $categories.html(dataCategories);
            $posted.html(dataPosted);
            $updated.html(dataUpdated);
            $story.html(dataStory);
            $topics.html(dataTopics);
            $status.html(dataStatus);
            $leadPhoto.attr('src', dataLeadPhoto);
            $leadPhotoThumb.attr('src', dataLeadPhotoThumb);
            $urlPath.attr('src', dataUrlPath);

        },

        // Loads and renders the data into element #coxLayout
        loadAndRenderCoxLayout:function (coxLayout) {
            this.load(coxLayout);
            this.render();
        }

    });

    // Sets all elements in the function ready to be rendered --- LOCK AND LOAD.
    var coxLayoutCollection = new CoxLayoutCollection(coxNewsData);

    var coxLayoutCollectionView = new CoxLayoutCollectionView({
        collection:coxLayoutCollection
    });
    var coxLayoutView = new CoxLayoutView({
        newCoxLayoutEventSource:coxLayoutCollectionView
    });

    // Renders all elements to the HTML when triggered by the corresponding link --- FIRE!
    coxLayoutCollectionView.render();

});


//=========== Animation & UI Controls ===========

// This sets the current news story link and current breadcrumb nav link active
$(document).ready(function () {
    $('.cox-ticker-links').click(function(){
        $('.cox-ticker-links').removeClass('active');
        $(this).addClass('active');
        $('.cox-breadcrumb-news').addClass('active');
        $('.cox-breadcrumb-home').click(function(){
            $('.cox-breadcrumb-news').removeClass('active');
            $('.cox-ticker-links').removeClass('active');
        })
    });
});

// Animation Functions
$(document).ready(function () {

    // This fires the animation on the Home page that transitions from list-view to story-view
    $('.story-view-link').click(function () {
        $('.cox-ticker-image-main, .cox-ticker-image-frame, .cox-ticker-category, .cox-ticker-posted, .cox-ticker-updated').fadeOut(600);
        setTimeout(function () {
            $('.cox-offset').animate({'margin-left':"0px", 'height':"20px"}, 1200, 'linear');
            $('.cox-ticker-list-box').animate({'min-height':"10px", 'margin-bottom':"0px", 'overflow':"visible"}, 1200, 'linear');
            $('.cox-ticker-links').animate({'font-size':"14px", 'font-weight':"normal"}, 1200, 'linear');
            $('#coxHomeContainer').animate({'width':"770px", 'min-height':"10px"}, 1200, 'linear');
            setTimeout(function () {
                $('#coxWrapper').fadeIn(800);
            },1200);
        },600);
    });

    // This fires the animation that transitions from story-view to list-view and reloads the Home page
    $('.list-view-link').click(function () {
        $('#coxWrapper').fadeOut(600);
        setTimeout(function () {
            $('#coxHomeContainer').animate({'width':"440px", 'max-width':"100%", 'min-height':"620px"}, 1200, 'linear');
            $('.cox-ticker-list-box').animate({'min-height':"120px", 'margin-bottom':"10px", 'overflow':"hidden"}, 800, 'linear');
            $('.cox-offset').animate({'margin-left':"140px", 'height':"120px"}, 1200, 'linear');
            setTimeout(function () {
                $('.cox-ticker-image-main, .cox-ticker-image-frame, .cox-ticker-category, .cox-ticker-posted, .cox-ticker-updated').fadeIn(600);
                setTimeout(function () {
                    location.reload();
                }, 600);
            }, 1200);
        }, 600);
    });

});


// This appends the URL in the address bar with the story ID
// NOTE: The story ID is set in the JSON file or the server database
//$(function () {
//    $.address.strict(false);
//    $("a").click(function(e) {
//        e.preventDefault();
//        $.address.value($(this).attr('url'));
//    });
//});


//=========== Touch and Non-Touch Device Detection ==========

// THESE EVENTS, METHODS & FUNCTIONS USE THE "Modernizr.touch" DETECTION TESTS TO ALLOW FOR EVENTS THAT NEED TO BE ISOLATED TO TOUCH OR NON-TOUCH DEVICES

// REFERENCE - 10/10/12: modernizr.com/docs/: "The Modernizr.touch test only indicates if the browser supports touch events,
// which does not necessarily reflect a touchscreen device. For example, Palm Pre / WebOS (touch) phones do not support
// touch events and thus fail this test... Modernizr also tests for Multitouch Support via a media query, which is how
// Firefox 4 exposes that for Windows 7 tablets."

// NOTE THAT SOME DEVELOPERS HAVE USED "Modernizr.touch" TO INVOKE FUNCTIONS, LOAD DATA OR DETECT MEDIA WIDTHS, BUT IT HAS BEEN DOCUMENTED
// TO BE PROBLEMATIC AND INCONSTANT. THE CUSTOM JAVASCRIPT FUNCTIONS BELOW HAVE BEEN TESTED IN A REAL WORLD APPLICATION, AND HAVE BEEN
// FOUND TO BE BOTH STABLE AND ACCURATE WORKING OFF OF THE "Modernizr.touch" DETECTION TEST


// jQuery HTML hasClass() Method
// Uses Modernizr.touch detection test to isolate events to touch or non-touch devices
$(document).ready(function(){
    // Event, Methods, & Functions that need to be isolated to TOUCH devices ONLY
    $('html').hasClass('touch', function(){
       // Javascript go here for touch devices only

   });

    // Event, Methods, & Functions that need to be isolated to NON-TOUCH devices ONLY
    $('html').hasClass('no-touch', function(){
       // Javascript go here for non-touch devices only

   });
});


//=========== Javascript Media Queries ===========

// These are javascript media queries similar to those in CSS

// jQuery Event "$(class-selector).click()" Method
// To use these functions add the selector class "media-click-event" to your anchor tag or button.
// (i.e. <a class="your-class  media-click-event" href="your-href.html">YOUR TEXT</a>
$('.media-click-event').click(function () {

    var width1024 = $(document).width();
    if (width1024 <= 1024) {
        // Javascript go here for widths 1024 and below

    }
    else {
        // Else Javascript goes here for widths 1024 and below

    }
    if (width980 <= 980) {
        // Javascript go here for widths 980 and below

    }
    else {
        // Else Javascript goes here for widths 980 and below

    }
    var width768 = $(document).width();
    if (width768 <= 768) {
        // Javascript go here for widths 768 and below

    }
    else {
        // Else Javascript goes here for widths 768 and below

    }
    var width480 = $(document).width();
    if (width480 <= 480) {
        // Javascript go here for widths 768 and below

    }
    else {
        // Else Javascript goes here for widths 768 and below

    }
    var width320 = $(document).width();
    if (width320 <= 320) {
        // Javascript go here for widths 768 and below

    }
    else {
        // Else Javascript goes here for widths 768 and below

    }

    //jQuery Event "$(widow).resize" Method
    // Fires events when window is resized and reaches a specific width
    // Used for elements such as collapsible menus or to turn on/off anchors tags and buttons
    $(window).resize(function () {
        var width1024 = $(document).width();
        if (width1024 <= 1024) {
            // Javascript go here for widths 1024 and below

        }
        else {
            // Else Javascript goes here for widths 1024 and below

        }
        if (width980 <= 980) {
            // Javascript go here for widths 980 and below

        }
        else {
            // Else Javascript goes here for widths 980 and below

        }
        var width768 = $(document).width();
        if (width768 <= 768) {
            // Javascript go here for widths 768 and below

        }
        else {
            // Else Javascript goes here for widths 768 and below

        }
        var width480 = $(document).width();
        if (width480 <= 480) {
            // Javascript go here for widths 480 and below

        }
        else {
            // Else Javascript goes here for widths 480 and below

        }
        var width320 = $(document).width();
        if (width320 <= 320) {
            // Javascript go here for widths 320 and below

        }
        else {
            // Else Javascript goes here for widths 320 and below

        }
    });
});