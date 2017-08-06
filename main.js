// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------
let field = document.getElementById("fields");
//let formArea = document.createElement("form");
//field.appendChild(formArea);

for (var i = 0; i < formData.length; i++) {
let formInput = document.createElement("input");
let formA = document.createElement("textArea");
let newSelect = document.createElement("select");
console.log(formData[i].type);
if (formData[i].type === "text" || formData[i].type ==="tel" || formData[i].type ==="email"){
   fields.append(formInput);
   formInput.setAttribute("src", formData[i].type);
   formInput.setAttribute("placeholder", formData[i].label);
   formInput.setAttribute("src", formData[i].id);
   //formInput.setAttribute("src", formData[ i ].options);
   formInput.setAttribute("src", formData[i].icon);

} else if (formData[i].type === "textarea"){
   field.appendChild(formA);
   formA.setAttribute("src", formData[i].type);
   formA.setAttribute("placeholder", formData[i].label);
   formA.setAttribute("src", formData[i].id);
   formA.setAttribute("src", formData[i].icon);
}
else if (formData[i].type === "select"){
   field.appendChild(newSelect);
   newSelect.setAttribute("src", formData[i].type);
   newSelect.setAttribute("placeholder", formData[i].label);
   newSelect.setAttribute("src", formData[i].id);

  for (j=0; j < formData[i].options.length; j++){
    let opt = document.createElement("option");
    // newSelect.appendChild(opt);

//opt.setAttribute("src", formData[i].options.label);
opt.setAttribute("label", formData[i].options[j].label);
newSelect.appendChild(opt);

  }
// field.appendChild( formArea );
// formArea.appendChild( formInput );
// formInput.setAttribute("src", formData[ i ].type);
// formInput.setAttribute("src", formData[ i ].label);
// formInput.setAttribute("src", formData[ i ].id);
// formInput.setAttribute("src", formData[ i ].options);
// formInput.setAttribute("src", formData[ i ].icon);
}
}
