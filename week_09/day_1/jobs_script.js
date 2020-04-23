$(document).ready(function() {
  $("#pagination").hide();
  $("#click").click("click", function() {
    var query = $("#searchJob").val();
    $("#pagination").show();
    event.preventDefault();
    $.ajax({
      url: "https://indreed.herokuapp.com/api/jobs/?q=" + query,
      contentType: "application/json"
    }).done(function(data) {
      console.log(data);
      console.table(data);
      var output = "";
      data.forEach(function(elem) {
        // console.log(elem.title);
        // ${elem.title}
        output += `
       
      <tbody>
        <tr>
          <td>${elem.title}</td>
          <td>${elem.company}</td>
          <td>@${elem.location}</td>
          <td>
          <a class="btn btn-outline-success" href="${elem.url}">Apply Now</a>
          </td>
        </tr>
      </tbody>
        `;
      });
      var thead = `     <table class="table">
      <thead class="thead-dark">
        <tr>
          <!-- <th scope="col">#</th> -->
          <th scope="col">Title</th>
          <th scope="col">Company</th>
          <th scope="col">Location</th>
          <th scope="col">Apply</th>
        </tr>
      </thead>
    </table>`;
      $(".table").html(thead);
      $("#table").html(output);
    });
  });
});
