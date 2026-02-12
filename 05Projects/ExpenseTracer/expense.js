document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseName = document.getElementById("expense-name");
  const expenseAmount = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalAmountDisplay = document.getElementById("total-amount");
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  let totalAmount = calculateTotal();
  renderExpenses();
  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = expenseName.value.trim();
    const amount = parseFloat(expenseAmount.value.trim());
    if (name !== "" && !isNaN(amount) && amount > 0) {
      const newExpense = {
        id: Date.now(),
        name: name,
        amount: amount,
      };
      expenses.push(newExpense);
      saveExpensesToLocal();
      renderExpenses();
      updateTotal();
      expenseName.value = "";
      expenseAmount.value = "";
    }
  });
  function renderExpenses() {
    expenseList.innerHTML = "";
    expenses.forEach((exp) => {
      const li = document.createElement("li");
      li.innerHTML = `${exp.name}- $${exp.amount}
      <button data-id="${exp.id}">Delete</button>`;
      expenseList.appendChild(li);
    });
  }
  function calculateTotal() {
    return expenses.reduce((sum, exp) => sum + exp.amount, 0);
  }
  function saveExpensesToLocal() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }
  function updateTotal() {
    totalAmount = calculateTotal();
    totalAmountDisplay.textContent = totalAmount.toFixed(2);
  }
  expenseList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const expenseId = parseInt(e.target.getAttribute("data-id"));
      expenses = expenses.filter((exp) => {
        return exp.id !== expenseId;
      });
      saveExpensesToLocal();
      renderExpenses();
      updateTotal();
    }
  });
});
