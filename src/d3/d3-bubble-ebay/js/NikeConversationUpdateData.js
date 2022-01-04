updateData:function(_self,article) {
    var _self = this;
    if(_self.historicLoaded){
        _self.buffer.push(article);
        if(_self.buffer.length>30){
            _self.buffer = _self.buffer.splice(10,_self.buffer.length);
        }
        $('#'+_self.getHtmlID()+'pages').show();
        return;
    }else{
        if(!approuter.models.appArticleModel.paused&&article.outputType=='REAL_TIME'){
            if ($('#'+_self.getHtmlID()+'conversationChartInner').children().length >= _self.listSize) {
                $('#'+_self.getHtmlID()+'conversationChartInner').children().last().html('').empty().remove();
                _self.currentList.splice(11, _self.currentList.length-11);
            }
            $('#'+_self.getHtmlID()+'pageShownCon').hide();
            //console.info(_self.getHtmlID()+' '+article.title);
            $('#'+_self.getHtmlID()+'conversationChartInner').prepend($(_self.formatTweet(article,false,false)));
            _self.currentList.push(article);
        }else{
            _self.buffer.push(article);
            if(_self.buffer.length>30){
                _self.buffer = _self.buffer.splice(10,_self.buffer.length);
            }
        }
    }
},