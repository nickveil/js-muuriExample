var itemContainers = [].slice.call(document.querySelectorAll('.board-col-content'));
var columnGrids = [];
var boardGrid;

/* Team member controls */
itemContainers.forEach(function (container){
	var grid = new Muuri(container,{
		items: '.board-team-member',
		layoutDuration:400,
		layoutEasing: 'ease',
		dragEnabled:true,
		dragSort: function(){
			return columnGrids;
		},
		dragSortInterval:0,
		dragContainer: document.body,
		dragReleaseDuration: 400,
		dragReleaseEasing: 'ease'
		})
		.on('dragStart', function(item){
			item.getElement().style.width = item.getWidth() + 'px';
			item.getElement().style.height = item.getHeight() + 'px';
		})
		.on('dragReleaseEnd', function (item){
			item.getElement().style.width = '';
    	item.getElement().style.height = '';
    	columnGrids.forEach(function(grid){
    		grid.refreshItems();
    	});
		})
		.on('layoutStart', function(){
			boardGrid.refreshItems().layout();
		})
		columnGrids.push(grid);
});

/* Column Control */
boardGrid = new Muuri('.board', {
  layoutDuration: 400,
  layoutEasing: 'ease',
  dragEnabled: true,
  dragSortInterval: 0,
  dragStartPredicate: {
    handle: '.board-col-header'
  },
  dragReleaseDuration: 400,
  dragReleaseEasing: 'ease'
});