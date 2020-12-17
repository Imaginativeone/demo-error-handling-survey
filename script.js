const form = document.getSelection('#survey');

document.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  let userName = document.getElementsByName('name');
  let gradeElements = document.getElementsByName('grade');
  let reArray = [...gradeElements];

  const checkedRadioButton = reArray.filter((selection) => { 
    return selection.checked;
  });

  // console.log(checkedRadioButton);

  console.log(userName[0].value);
  console.log(checkedRadioButton[0].value);
      
  try {

    try {
      let someData = fetch('https://jsonplaceholder.typicode.com/posts/1/biker')
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log('Error');
        console.log('Defaulting to failover data.');
        someData = fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((json) => console.log(json))  
      })
    } catch(error) {}
  } catch {

    const someData = fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => console.log(json));
  
  }

}
