// set data in local storage
function setInLocalStorage(dataName, data) {

  let existingData = JSON.parse(localStorage.getItem(dataName)) || [];
  let updatedData = [...existingData, ...JSON.parse(data)];

 // remove Repeat data
  let updateInRemoveProduct =  updatedData.reduce((prev, current) => {
    const mainProduct = prev.find((item) => item.id === current.id);

    if (!mainProduct) {
      return prev.concat([current]);
    } else {
      return prev;
    }
  }, []);

  // set no repeat product data
  localStorage.setItem(dataName, JSON.stringify(updateInRemoveProduct));
}


// get data in local storage
function getInLocalStorage(dataName) {
  return JSON.parse(localStorage.getItem(dataName));
}

export { setInLocalStorage, getInLocalStorage };
