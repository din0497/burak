console.log("Products frontend javascript file");

$(function () {
  $(".product-collection").on("change", () => {
    const selectedValue = $(".product-collection").val();

    if (selectedValue === "DRINK") {
      $("#product-collection").hide();
      $("#product-volume").show();
    } else {
      $("#product-collection").show();
      $("#product-volume").hide();
    }
  });

  $('#process-btn').on('click', () => {
    $('.dish-container').slideToggle(500)
    $('#process-btn').css("display", "none")
  })
  $('#cancel-btn').on('click', () => {
    
    $('.dish-container').slideToggle(100)
    $('#process-btn').css("display", "flex")
  })
});

const validateForm = () => {
  const productName = $(".product-name").val();
  const productPrice = $(".product-price").val();
  const productLeftCount = $(".product-left-count").val();
  const productCollection = $(".product-collection").val();
  const productDesc = $(".product-desc").val();
  const productStatus = $(".product-status").val();

  if (
    productName === "" ||
    productPrice === "" ||
    productLeftCount === "" ||
    productCollection === "" ||
    productDesc === "" ||
    productStatus === ""
  ) {
    alert("Please insert all details!");
    return false;
  }

  if (memberPassword !== confirmPassword) {
    alert("The password is different,  please check!");
    return false;
  }

  const memberImage = $(".member-image").get(0).files[0]
    ? $(".member-image").get(0).files[0]?.name
    : null;

  if (!memberImage) {
    alert("Please insert restaurant image");
    return false;
  }
};

function previewFileHendler(input, order) {
  const imgClassName = input.className;

  const file = $(`.${imgClassName}`).get(0).files[0];
  const fileType = file["type"];
  const validationType = ["image/jpg", "image/jpeg", "image/png"];

  if (!validationType.includes(fileType)) {
    alert("Only image/jpg, image/jpeg, image/png");
  } else {
    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        $(`#image-section-${order}`).attr("src", reader.result);
      };

      reader.readAsDataURL(file);
    }
  }
}
