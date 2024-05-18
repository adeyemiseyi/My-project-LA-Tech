
//PRODUCT DETIALS PAINATION
// Function to display specific page

const pageNumbers = document.querySelector(".pageNumbers");
const paginationList = document.getElementById("paginationList");
const listItems = paginationList.querySelectorAll("li");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

const contentLimit = 3;
const pageCount = Math.ceil(listItems.length / contentLimit);
let currentPage = 1;

const displayPageNnumbers = (index) => {
  const pageNumber = document.createElement("a");
  pageNumber.innerHTML = index;
  pageNumber.setAttribute('href', "#");
  pageNumber.setAttribute("index", index);
  pageNumbers.appendChild(pageNumber)
};

const getPageNumbers = () =>{
  for(let i=1; i <= pageCount; i++){
    displayPageNnumbers(i)
  };
};

const disableButton = (button) => {
  button.classList.add("disabled");
  button.setAttribute("disbled", true);
};

const enableButton = (button) => {
  button.classList.remove("disabled");
  button.removeAttribute("disabled", true);
};

function remove() {
  if (currentPage == 1) {
    prevButton.disabled = true;
  }
  else{
    prevButton.disabled = false;
  }

  if(currentPage == pageCount){
    nextButton.disabled = true;
  }
  else if(pageCount >= currentPage){
    nextButton.disabled = false
  }
  else{
    
  }
}

const conrolButtonsStatus = () => {
  if(currentPage === 1){
    disableButton(prevButton);
    remove()
  }
  else{
    enableButton(prevButton);
  }
  if(pageCount === currentPage){
    disableButton(nextButton);
    remove()
  }
  else{
  }
};

const handleActivePageNumber = () => {
  document.querySelectorAll('a').forEach((button) =>{
    button.classList.remove("active");
    const pageIndex = Number(button.getAttribute("index"));
    if(pageIndex == currentPage){
      button.classList.add('active');
    }
  });
};

const setCurrentPage = (pageNum) =>{
  currentPage = pageNum;

  handleActivePageNumber();
  conrolButtonsStatus();

  const prevRange = (pageNum -1) * contentLimit;
  const currRange = pageNum * contentLimit;

  listItems.forEach((item, index) =>{
    item.classList.add('hidden');
    if(index >= prevRange && index < currRange){
      item.classList.remove('hidden');
    }
  });
};

window.addEventListener('load', ()=>{
  getPageNumbers();
  setCurrentPage(1);

  prevButton.addEventListener('click', ()=>{
      setCurrentPage(currentPage -1);
  });

  nextButton.addEventListener("click", ()=>{
    setCurrentPage(currentPage +1);

  });

  document.querySelectorAll('a').forEach((button) =>{
    const pageIndex = Number(button.getAttribute('index'));
    if(pageIndex){
      button.addEventListener('click', ()=>{
        setCurrentPage(pageIndex);
      });
    };
  });
});


/*
  function showPage(pageNumber) {
    const pageItems = document.querySelectorAll(".page-item");
    for (let i = 0; i < pageItems.length; i++) {
      pageItems[i].style.display = i === pageNumber - 1 ? "block" : "none";
    }
  }

  // Create buttons for each page
  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.addEventListener("click", () => showPage(i));
    pagination.appendChild(button);
  }

  // Show first page by default
  showPage(1);
*/
/*
//responsive hadle bar
const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')

if (bar) {
   bar.addEventListener('click', () => {
      nav.classList.add('active');
   })
}

if (close) {
   close.addEventListener('click', () => {
      nav.classList.remove('active');
   })
}
*/