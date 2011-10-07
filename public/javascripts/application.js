// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
jQuery(document).ready(function() {
  $('#add').click(function(e) { 
   	var count = $('.item').length
	var lastItem = $('.item:last')
	var input = lastItem.find('input')
	var label = lastItem.find('label')
	var newInput = input.clone();
	var newLabel = label.clone();
	
	newInput.attr('id', function() {
	  return 'list_list_items_attributes_' + count + '_item'
	});
	newInput.attr('name', function() {
	  return 'list[list_items_attributes][' + count + '][item]'
	});
	newInput.val('');
	newLabel.attr('for', function() {
	  return 'list[list_items_attributes][' + count + '][item]'
	});
	
	var newItem = $('<p>')
	newItem.addClass('item')
	newItem.append(newLabel)
	newItem.append('<br>')
	newItem.append(newInput)	
	lastItem.after(newItem)
    return false;
	
  });


});
