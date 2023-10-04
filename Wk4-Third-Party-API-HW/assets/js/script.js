$(document).ready(function() {
    var containerEl = $('#container');
    var submitBtn = $('#formSubmit');
    var table = $('#projTable');
    var pName = $('#projName');
    var pType = $('#projType');
    var pDate = $('#projDate');
    var remove = $('<a>');
    var projList = [];
  
    // Function to remove the row from the table and rewrite data in local storage
    function removeRow(rowIndex) {
      table.find('tbody tr').eq(rowIndex).remove();
      projList.splice(rowIndex, 1);
      localStorage.setItem('projList', JSON.stringify(projList));
    }
  
    // Function to create a new row in the table
    function createRow(project) {
      var newRow = '<tr>';
      newRow += '<td>' + project.name + '</td>';
      newRow += '<td>' + project.type + '</td>';
      newRow += '<td>' + project.date + '</td>';
      newRow += '<td><a href="#" class="remove-link">Remove</a></td>';
      newRow += '</tr>';
      
      var today = new Date();
      var projectDate = new Date(project.date);
  
      if (projectDate < today) {
        newRow = $(newRow).addClass('past-due');
      } else if (projectDate.toDateString() === today.toDateString()) {
        newRow = $(newRow).addClass('due-today');
      }
  
      table.find('tbody').append(newRow);
  
      table.find('.remove-link:last').on('click', function(e) {
        e.preventDefault();
        var rowIndex = $(this).closest('tr').index();
        removeRow(rowIndex);
      });
    }
  
    // Function to initialize the table with data from local storage
    function initTable() {
      var storedProjList = JSON.parse(localStorage.getItem('projList'));
      if (storedProjList) {
        projList = storedProjList;
        table.find('tbody').empty(); // Clear tbody before adding rows
        for (var i = 0; i < projList.length; i++) {
          createRow(projList[i]);
        }
      }
    }
  
    initTable();
  
    $('#project-form').on('submit', function(event) {
      event.preventDefault();
      var projectName = pName.val();
      var projectType = pType.val();
      var projectDate = pDate.val();
  
      var project = {
        name: projectName,
        type: projectType,
        date: projectDate
      };
  
      projList.push(project);
      localStorage.setItem('projList', JSON.stringify(projList));
      createRow(project);
  
      pName.val('');
      pType.val('');
      pDate.val('');
    });
  });