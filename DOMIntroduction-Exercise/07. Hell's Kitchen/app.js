function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const inputArea = document.querySelector('#inputs>textarea');
   const outputRestaurant = document.querySelector('#bestRestaurant>p');
   const outputWorkers = document.querySelector('#workers>p');

   
   function onClick() {
      const restaurants = {};
      const textInput = JSON.parse(inputArea.value);
      let best, workers;

      outputRestaurant.textContent = '';
      outputWorkers.textContent = '';

      textInput.forEach(line => {
         let [restaurant, workers] = line.split(' - ');
         workers = workers.split(', ');

         if (!restaurants[restaurant])
            restaurants[restaurant] = [];

         workers.forEach(worker => {
            const [name, salary] = worker.split(' ');
            restaurants[restaurant].push({ name, salary: Number(salary) })
         });
      })

      for (const restaurant in restaurants) {
         const current = restaurants[restaurant];

         current.sort((w1, w2) => w2.salary - w1.salary);
         current.avg = (current.reduce((avg, worker) => avg + worker.salary, 0) / current.length);

         if (best == undefined) {
            best = { name: restaurant, avg: current.avg, best: current[0].salary };
            workers = current;
         } else if (current.avg > best.avg) {
            best.name = restaurant;
            best.avg = current.avg;
            best.best = current[0].salary;
            workers = current;
         }
      }

      outputRestaurant.textContent = `Name: ${best.name} Average Salary: ${best.avg.toFixed(2)} Best Salary: ${best.best.toFixed(2)}`;
      workers.map(worker => outputWorkers.textContent += `Name: ${worker.name} With Salary: ${worker.salary} `);

      // console.log(restaurants);
      // console.log(best);
      // console.log(workers);
      // console.log('-------------------------------------');
   }
}