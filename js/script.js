person = [];
i = 0;

function push_value_to_table(identification, first_name, last_name, email){
  obj = {};
  obj["identification"]=identification;
  obj["first_name"]=first_name;
  obj["last_name"]=last_name;
  obj["email"]=email;
  person.push(obj);
}


push_value_to_table("V21601011", "Hector 0", "Gamez 0", "gamezh81@gmail.com");
push_value_to_table("V21601011", "Hector 1", "Gamez 1", "gamezh81@gmail.com");
push_value_to_table("V21601011", "Hector 2", "Gamez 2", "gamezh81@gmail.com");
push_value_to_table("V21601011", "Hector 3", "Gamez 3", "gamezh81@gmail.com");
push_value_to_table("V21601011", "Hector 4", "Gamez 4", "gamezh81@gmail.com");
push_value_to_table("V21601011", "Hector 5", "Gamez 5", "gamezh81@gmail.com");

/*
while (i < person.length){
  console.log(person[i]);
  i++;
}*/

function generate_table_head(){
  table = document.getElementById("table");
  header = table.createTHead();
  row = header.insertRow();
  cell = row.insertCell(); cell.innerHTML = "Identificacion";
  cell = row.insertCell(); cell.innerHTML = "First Name";
  cell = row.insertCell(); cell.innerHTML = "Last Name";
  cell = row.insertCell(); cell.innerHTML = "Email";
}

function generate_table_body(){
  table = document.getElementById("table");
  i = 0;
  j = 0;
  body = table.createTFoot('tr');
  while(i < person.length){
  row = body.insertRow();
    for (key in person[i]){
      if (person[i].hasOwnProperty(key)){
      cell = row.insertCell(); cell.innerHTML = person[i][key];
      j++;
      }
    }
  i++;
  }
}

function generate_table(){
  generate_table_head();
  generate_table_body();
}