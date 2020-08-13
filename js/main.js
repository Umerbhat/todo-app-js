document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    var taskList = [];
    var $taskInput = document.getElementById("task-input");
    var $taskList = document.getElementById("my-tasks");
    function onTaskComplete() {
      var $item = document.getElementById(this.id);
      $item.classList.toggle("completed-task");
    }
    function onTaskRemove(e) {
      e.stopPropagation();
      const id = this.parentNode.id;
      var $item = document.getElementById(id);
      taskList =  taskList.filter(function (elem) {
        console.log(elem,id, "elem")
        return elem !== id;
      });
      $item.remove();
    }
    $taskInput.addEventListener("keydown", function (e) {
      if (e.keyCode === 13) {
        const taskId = Math.random()+"a";
        var task = e.target.value;
        var taskElement = document.createElement("li");
        var taskElementRemove = document.createElement("div");
        taskElementRemove.classList = "remove-task";
        taskList.push(taskId);
        taskElement.id = taskId;
        taskElement.innerText = task;
        taskElement.appendChild(taskElementRemove);
        $taskList.appendChild(taskElement);

        e.target.value = "";

        taskElement.addEventListener("click", onTaskComplete);
        taskElementRemove.addEventListener("click", onTaskRemove);
        console.log(taskList,"taskList")
      }
    });
  }
};
