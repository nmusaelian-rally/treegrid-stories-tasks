Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:{ html:'<a href="https://help.rallydev.com/apps/2.0rc3/doc/">App SDK 2.0rc3 Docs</a>'},
    launch:function(){
        var that = this;
        Ext.create('Rally.data.wsapi.TreeStoreBuilder').build({
            models: ['userstory'],
             autoLoad: true,
             filters:[
                {
                    property: 'Name',
                    operator: 'contains',
                    value: 'story'
                }
             ],
             enableHierarchy: true
            }).then({
             success: function(store) {
                var grid = Ext.create('Ext.Container', {
                    items: [{
                        xtype: 'rallytreegrid',
                        columnCfgs: [
                            'Name',
                            'Owner'
                        ],
                        store: store
                    }]
                });
                that.add(grid);
                
            }
        });
    }  
});
