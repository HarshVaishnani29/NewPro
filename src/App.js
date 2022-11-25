import logo from './logo.svg';
import './App.css';

function App() {
  // let myTable = document.querySelector('#table')

  // let medical = [
  //   { id: 101, name: 'Abacavir', quantity: 25, price: 150, expiry: 2022, status: true },

  //   { id: 102, name: 'Eltrombopag', quantity: 90, price: 550, expiry: 2021, status: true },

  //   { id: 103, name: 'Meloxicam', quantity: 85, price: 450, expiry: 2025, status: false },

  //   { id: 104, name: 'Allopurinol', quantity: 50, price: 600, expiry: 2023, status: true },

  //   { id: 105, name: 'Phenytoin', quantity: 63, price: 250, expiry: 2021, status: false }
  // ];

  // let headers = ['id', 'name', 'quantity', 'price', 'expiry', 'status'];


  // let table = document.createElement('table');
  // let hearderRow = document.createElement('tr');

  // headers.forEach(headerText => {
  //   let headerr = document.createElement('th');
  //   let textnode = document.createTextNode(headerText);
  //   headerr.appendChild(textnode);
  //   hearderRow.appendChild(headerr);
  // });
  // table.appendChild(hearderRow);

  // medical.forEach(data => {
  //   let row = document.createElement('tr')

  //   Object.values(data).forEach(text => {
  //     let cell = document.createElement ('th');
  //     let textnode = document.createTextNode(text);
  //     cell.appendChild(textnode);
  //     row.appendChild(cell)
  //   });

  //   table.appendChild(row);

  // });
  //   myTable.appendChild(table);

  <h1>Medical Data</h1>
  
  var medical=[
        { id: 101, name: 'Abacavir', quantity: 25, price: 150, expiry: 2022, status: true },
    
        { id: 102, name: 'Eltrombopag', quantity: 90, price: 550, expiry: 2021, status: true },
    
        { id: 103, name: 'Meloxicam', quantity: 85, price: 450, expiry: 2025, status: false },
    
        { id: 104, name: 'Allopurinol', quantity: 50, price: 600, expiry: 2023, status: true },
    
        { id: 105, name: 'Phenytoin', quantity: 63, price: 250, expiry: 2021, status: false }
      ];

      var html="<table border=1|1>"

      setTimeout(() =>{
        html+='<thead>'
        html+='<tr>';
        html+='<td>' +'Id'+'</td>';
        html+='<td>' +'Name'+'</td>';
        html+='<td>' +'Quantity'+'</td>';
        html+='<td>' +'Price'+'</td>';
        html+='<td>' +'Expiry'+'</td>';
        html+='<td>' +'Status'+'</td>';
        html+='</tr>';
        html+='</thead>';

        for (var i=0; i<medical.length; i++){
          html+='<tr>';
          html+='<td>'+medical[i].id+'</td>';
          html+='<td>'+medical[i].name+'</td>';
          html+='<td>'+medical[i].quantity+'</td>';
          html+='<td>'+medical[i].price+'</td>';
          html+='<td>'+medical[i].expiry+'</td>';
          html+='<td>'+medical[i].status+'</td>';
          html+='</tr>';
        }

        document.getElementById("table").innerHTML = html

      }, 500);
  }
export default App;


