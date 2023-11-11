const BASE_URL = "https://cloudrun-webmware-001-iwrlbwjlca-ey.a.run.app/api/v2/filters";
        let cachedItems = [
    {
        "priceFrom": 31.00,
        "priceTo": null,
        "id": 3,
        "name": "Alfa Romeo"
    },
    {
        "priceFrom": 33.00,
        "priceTo": null,
        "id": 6,
        "name": "Audi"
    },
    {
        "priceFrom": 34.00,
        "priceTo": null,
        "id": 8,
        "name": "Bentley"
    },
    {
        "priceFrom": 33.00,
        "priceTo": null,
        "id": 9,
        "name": "BMW"
    },
    {
        "priceFrom": 32.00,
        "priceTo": null,
        "id": 12,
        "name": "Cadillac"
    },
    {
        "priceFrom": 33.00,
        "priceTo": null,
        "id": 13,
        "name": "Chevrolet"
    },
    {
        "priceFrom": 35.00,
        "priceTo": null,
        "id": 14,
        "name": "Chrysler"
    },
    {
        "priceFrom": 35.00,
        "priceTo": null,
        "id": 15,
        "name": "Citroen"
    },
    {
        "priceFrom": 33.00,
        "priceTo": null,
        "id": 16,
        "name": "Dacia"
    },
    {
        "priceFrom": 34.00,
        "priceTo": null,
        "id": 17,
        "name": "Daewoo"
    },
    {
        "priceFrom": 34.00,
        "priceTo": null,
        "id": 19,
        "name": "Daihatsu"
    },
    {
        "priceFrom": 33.00,
        "priceTo": null,
        "id": 22,
        "name": "Dodge"
    },
    {
        "priceFrom": 32.00,
        "priceTo": null,
        "id": 24,
        "name": "Fiat"
    },
    {
        "priceFrom": 33.00,
        "priceTo": null,
        "id": 26,
        "name": "Ford"
    },
    {
        "priceFrom": 35.00,
        "priceTo": null,
        "id": 28,
        "name": "GMC"
    },
    {
        "priceFrom": 34.00,
        "priceTo": null,
        "id": 29,
        "name": "Honda"
    },
    {
        "priceFrom": 34.00,
        "priceTo": null,
        "id": 30,
        "name": "Hyundai"
    },
    {
        "priceFrom": 34.00,
        "priceTo": null,
        "id": 31,
        "name": "Infiniti"
    },
    {
        "priceFrom": 34.00,
        "priceTo": null,
        "id": 32,
        "name": "Isuzu"
    },
    {
        "priceFrom": 34.00,
        "priceTo": null,
        "id": 33,
        "name": "Jaguar"
    },
    {
        "priceFrom": 33.00,
        "priceTo": null,
        "id": 34,
        "name": "Jeep"
    },
    {
        "priceFrom": 32.00,
        "priceTo": null,
        "id": 35,
        "name": "Kia"
    },
    {
        "priceFrom": 35.00,
        "priceTo": null,
        "id": 36,
        "name": "Lada"
    },
    {
        "priceFrom": 34.00,
        "priceTo": null,
        "id": 37,
        "name": "Lancia"
    },
    {
        "priceFrom": 34.00,
        "priceTo": null,
        "id": 38,
        "name": "Land Rover"
    },
    {
        "priceFrom": 33.00,
        "priceTo": null,
        "id": 39,
        "name": "LEVC"
    },
    {
        "priceFrom": 32.00,
        "priceTo": null,
        "id": 40,
        "name": "Lexus"
    },
    {
        "priceFrom": 32.00,
        "priceTo": null,
        "id": 41,
        "name": "MAN"
    },
    {
        "priceFrom": 33.00,
        "priceTo": null,
        "id": 42,
        "name": "Maserati"
    },
    {
        "priceFrom": 32.00,
        "priceTo": null,
        "id": 44,
        "name": "Mazda"
    },
    {
        "priceFrom": 31.00,
        "priceTo": null,
        "id": 45,
        "name": "Mercedes"
    },
    {
        "priceFrom": 31.00,
        "priceTo": null,
        "id": 46,
        "name": "MG"
    },
    {
        "priceFrom": 33.00,
        "priceTo": null,
        "id": 48,
        "name": "Mini"
    },
    {
        "priceFrom": 35.00,
        "priceTo": null,
        "id": 49,
        "name": "Mitsubishi"
    },
    {
        "priceFrom": 33.00,
        "priceTo": null,
        "id": 50,
        "name": "Nissan"
    },
    {
        "priceFrom": 34.00,
        "priceTo": null,
        "id": 52,
        "name": "Opel"
    },
    {
        "priceFrom": 32.00,
        "priceTo": null,
        "id": 53,
        "name": "Peugeot"
    },
    {
        "priceFrom": 31.00,
        "priceTo": null,
        "id": 55,
        "name": "Pontiac"
    },
    {
        "priceFrom": 34.00,
        "priceTo": null,
        "id": 56,
        "name": "Porsche"
    },
    {
        "priceFrom": 33.00,
        "priceTo": null,
        "id": 57,
        "name": "Proton"
    },
    {
        "priceFrom": 33.00,
        "priceTo": null,
        "id": 58,
        "name": "Renault"
    },
    {
        "priceFrom": 35.00,
        "priceTo": null,
        "id": 60,
        "name": "Rover"
    },
    {
        "priceFrom": 35.00,
        "priceTo": null,
        "id": 61,
        "name": "Saab"
    },
    {
        "priceFrom": 31.00,
        "priceTo": null,
        "id": 62,
        "name": "Seat"
    },
    {
        "priceFrom": 35.00,
        "priceTo": null,
        "id": 63,
        "name": "Skoda"
    },
    {
        "priceFrom": 32.00,
        "priceTo": null,
        "id": 64,
        "name": "Smart"
    },
    {
        "priceFrom": 31.00,
        "priceTo": null,
        "id": 65,
        "name": "Ssangyong"
    },
    {
        "priceFrom": 33.00,
        "priceTo": null,
        "id": 66,
        "name": "StreetScooter"
    },
    {
        "priceFrom": 33.00,
        "priceTo": null,
        "id": 67,
        "name": "Subaru"
    },
    {
        "priceFrom": 31.00,
        "priceTo": null,
        "id": 68,
        "name": "Suzuki"
    },
    {
        "priceFrom": 32.00,
        "priceTo": null,
        "id": 70,
        "name": "Tesla"
    },
    {
        "priceFrom": 32.00,
        "priceTo": null,
        "id": 71,
        "name": "Toyota"
    },
    {
        "priceFrom": 32.00,
        "priceTo": null,
        "id": 73,
        "name": "Volvo"
    },
    {
        "priceFrom": 34.00,
        "priceTo": null,
        "id": 74,
        "name": "VW"
    }
];
        
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('dropdown-button1').onclick = function() { toggleDropdown(1); };
            document.getElementById('dropdown-button2').onclick = function() { toggleDropdown(2); };
            document.getElementById('dropdown-button3').onclick = function() { toggleDropdown(3); };
        });

        let selection1 = -1; // Variable to store the first dropdown's selection
        let selection2 = -1; // Variable to store the second dropdown's selection
        let selection3 = -1; // Variable to store the third dropdown's selection
        let lang = '';
        try {
            lang = Weglot.getCurrentLang()
        } catch(error) {
            lang = 'de';
        }
        populateDropdown(document.getElementById('dropdown-content1'), cachedItems);


      
        function toggleDropdown(number) {
          // Check if previous dropdowns have selections (if applicable)
          if ((number === 2 && selection1 < 0) || (number === 3 && (selection1 < 0|| selection2 < 0))) {
            return; // Do nothing if the previous dropdowns have no selection
          }
      
          let contentId = 'dropdown-content' + number;
          var content = document.getElementById(contentId);
          let otherDropdowns = document.getElementsByClassName('dropdown-content');
          
          // Close all other dropdowns
          Array.from(otherDropdowns).forEach(function(element) {
            if (element.id !== contentId) {
              element.style.display = 'none';
              element.style.opacity = 0;
            }
          });
          Array.from(document.getElementsByClassName("arrow-image")).forEach(function(arrow) {
            if (arrow.id !== "arrow" + number) {
                arrow.style.transform = "rotate(0deg) translateY(-50%)"
            }
            }
          )
      
          // Toggle current dropdown
          if (content.style.display === 'block') {
            document.getElementById("arrow" + number).style.transform = "rotate(0deg) translateY(-50%)"
            content.style.display = 'none';
            content.style.opacity = 0;
          } else {
            content.style.display = 'block';
            document.getElementById("arrow" + number).style.transform = "rotate(180deg) translateY(50%)";
            let fetchURL = '';
            if (number === 1) {
              populateDropdown(content, cachedItems);
            } else { 
                if (number === 2) {
                fetchURL = BASE_URL + '/manufacturers/' + selection1 + "/model-series/" ;
                } else if(number === 3) {
                    fetchURL = BASE_URL + '/manufacturers/' + 'model-series/' + selection2 + "/fuel-types"
                }
                fetch(fetchURL)
                .then(response => response.json())
                .then(data => {
                  populateDropdown(content, data);
                })
                .catch(error => console.error('Error fetching items:', error));
            }
        }
            setTimeout(() => {
              content.style.opacity = 1;
            }, 0);
        }
        
      
        function populateDropdown(dropdownContent, items) {
          dropdownContent.innerHTML = ''; // Clear existing items
          let currentSelection;
          if (dropdownContent.id === 'dropdown-content1') currentSelection = selection1;
          if (dropdownContent.id === 'dropdown-content2') currentSelection = selection2;
          if (dropdownContent.id === 'dropdown-content3') currentSelection = selection3;
          items.forEach(item => {
            const a = document.createElement('a');
            if (dropdownContent.id === 'dropdown-content1') {
                a.innerText = item.name; // Adjust according to the actual data structure
            } else {
                if (lang == 'de') a.innerText = item.nameDe; 
                else a.innerText = item.nameEn;
            }
            a.id = item.id;
            a.href = '#';
            
            if (a.id === currentSelection) {
                a.classList.add('selected');
            }

            a.onclick = function() { selectItem(a, dropdownContent.id); };
            dropdownContent.appendChild(a);
          });
        }
      
        function selectItem(element, contentId) {
          // Remove 'selected' class from all items in this dropdown
          let items = element.parentNode.querySelectorAll('a');
          items.forEach((item) => item.classList.remove('selected'));

          // Add 'selected' class to the clicked item
          element.classList.add('selected');
          button1 = document.getElementById('dropdown-button1');
          button2 = document.getElementById('dropdown-button2');
          button3 = document.getElementById('dropdown-button3');
          let arrow = null;
          switch (contentId) {
            case 'dropdown-content1':
              if (selection1 !== element.id) {
                arrow = document.getElementById("arrow1")
                selection1 = element.id; // Store selection
                selection2 = -1;
                selection3 = -1;
                button1.innerText = element.innerText;
                button2.innerText = lang === "de" ? "Modell" : "Model";
                button3.innerText = lang === "de" ? "Treibstoffart" : "Fuel Type";
              }
              break;
            case 'dropdown-content2':
              if (selection2 !== element.id) {
                arrow = document.getElementById("arrow2")
                selection2 = element.id; // Store selection
                selection3 = -1;
                button2.innerText = element.innerText;
                button3.innerText = lang === "de" ? "Treibstoffart" : "Fuel Type";
              }
              break;
            case 'dropdown-content3':
              arrow = document.getElementById("arrow3");
              selection3 = element.id; // Store selection
                button3.innerText = element.innerText;
              break;
          }
          // Close the dropdown
          var content = document.getElementById(contentId);
          content.style.opacity = 0;
          content.style.display = 'none';
          arrow.style.transform = "rotate(0deg) translateY(-50%)"
        }
      
        // Clicking outside the dropdowns closes them
        window.onclick = function(event) {
          if (!event.target.matches('.dropdown button')) {
            var dropdowns = document.getElementsByClassName('dropdown-content');
            for (var i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
                openDropdown.style.opacity = 0;

                document.getElementById("arrow" + (i + 1)).style.transform = "rotate(0deg) translateY(-50%)"
              }
            }
          }
        }
        function generateLink(){
          return "";
        }