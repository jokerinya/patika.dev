function getData(data) {
  return new Promise((resolve, reject) => {
    // returns a promise
    console.log('Data has been fetching...');

    if (data) {
      resolve('Data fetched.');
    } else {
      reject('Problem occurred, data has not been fetched.');
    }
  });
}

function cleanData(receivedData) {
  // returns a promise
  return new Promise((resolve, reject) => {
    console.log('Data ordering...');

    if (receivedData) {
      resolve('Data ordered');
    } else {
      reject('Problem occurred, data has not been ordered.');
    }
  });
}

async function processData() {
  try {
    const receivedData = await getData(true);
    console.log(receivedData);
    const cleanedData = await cleanData(false);
    console.log(cleanedData);
  } catch (error) {
    console.log(error);
  }
}

processData();
