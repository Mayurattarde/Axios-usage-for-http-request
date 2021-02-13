// GET REQUEST
function getTodos() {
    // axios({
    //   method: 'get',
    //   url: 'https://jsonplaceholder.typicode.com/todos',
    //   params: {
    //     _limit: 5
    //   }
    // })
    //   .then(res => showOutput(res))
    //   .catch(err => console.error(err));

    axios
        .get('https://jsonplaceholder.typicode.com/todos?_limit=5', { //  (limit=5) will display only 5 id's. 
            timeout: 5000
        })
        .then(res => showOutput(res)) // Here we use JSON response(response.json()) but as we want to display it on browser , so
        //we have use showoutput function(showOutput(res)).
        .catch(err => console.error(err));
}
/* We can also use 
    .then(function(response){
           return response.json()  // BUt in actual code we will use showOutput(res) to display it on browser.
    })
    .then(function(data){
      console.log(data)
    })
    */

// POST REQUEST
function addTodo() {
    axios
        .post('https://jsonplaceholder.typicode.com/todos', {
            title: 'New Todo',
            completed: false
                // Can also use Id here
        })
        .then(res => showOutput(res))
        .catch(err => console.error(err));
}

// PUT/PATCH REQUEST
function updateTodo() {
    axios
        .patch('https://jsonplaceholder.typicode.com/todos/1', {
            title: 'Updated Todo',
            completed: true
        })
        .then(res => showOutput(res))
        .catch(err => console.error(err));
}

// DELETE REQUEST
function removeTodo() {
    axios
        .delete('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => showOutput(res))
        .catch(err => console.error(err));
}

// Show output in browser
function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">  
      <h5>Status: ${res.status}</h5>        
    </div>

    <div class="card mt-3">
      <div class="card-header">
        Headers                             
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>

    <div class="card mt-3">
      <div class="card-header"> 
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
    
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);