const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices=document.querySelectorAll(".prices")
	const total = Array.from(prices).reduce(
	  (acc, curr) => acc + Number(curr.textContent),
	  0
	); 
	const row = document.createElement("tr");
	// const data = document.createElement("td");
	row.innerHTML=`
		  <td class="item">Total</td>
	      <td class="prices" id="ans">${total}</td>
	`
 document.querySelector("table").appendChild(row);
};

getSumBtn.addEventListener("click", getSum);

