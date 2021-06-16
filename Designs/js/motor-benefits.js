//////////////////////////////////////////////////////////
// COVER TYPE CODE STATEMENT
/////////////////////////////////////////////////////////
var cover = document.getElementById("cover_type");
var sum_insured = document.getElementById("sum_insured_input");
var rate = document.getElementById("rate_input");
var policy_remarks = document.getElementById("policy_remarks");

cover.addEventListener("change", function () {
  if (
    cover.options[cover.selectedIndex].value == "" ||
    cover.options[cover.selectedIndex].value == "Comprehensive"
  ) {
    rate.style.display = "initial";
    sum_insured.placeholder = "Sum Insured";
    policy_remarks.rows = "8";
    policy_remarks.style.maxHeight = "141px";
  } else {
    rate.style.display = "none";
    sum_insured.placeholder = "Basic Premium";
    policy_remarks.rows = "12";
    policy_remarks.style.maxHeight = "180px";
  }
});

//////////////////////////////////////////////////////////
// MV CLASS SELECTION CODE STATEMENT
/////////////////////////////////////////////////////////
var mv_class = document.getElementById("class_selection");
var selected = mv_class.options[mv_class.selectedIndex].value;

var benefits_list = document.getElementById("benefits_list");

mv_class.addEventListener("change", function () {
  if (mv_class.options[mv_class.selectedIndex].value == "") {
    benefits_list.style.display = "none";
  } else {
    benefits_list.style.display = "flex";
  }
});

//////////////////////////////////////////////////////////
// MV CLASSSELECTIONCODE STATEMENT
/////////////////////////////////////////////////////////

var ep = document.getElementById("excess_protector");
var ep_basic_premium = document.getElementById("ep_basic_premium");
var pll = document.getElementById("pll");
var pll_benefit_basic_premium = document.getElementById(
  "pll_benefit_basic_premium"
);
var rescue_benefit = document.getElementById("rescue_benefit");
var rescue_benefit_basic_premium = document.getElementById(
  "rescue_benefit_basic_premium"
);
var pvt = document.getElementById("pvt");
var pvt_basic_premium = document.getElementById("pvt_basic_premium");
var windscreen_benefit = document.getElementById("windscreen_benefit");
var windscreen_benefit_basic_premium = document.getElementById(
  "windscreen_benefit_basic_premium"
);

ep.addEventListener("change", function () {
  if (ep.checked) {
    ep_basic_premium.disabled = false;
  } else {
    ep_basic_premium.disabled = true;
  }
});

windscreen_benefit.addEventListener("change", function () {
  if (windscreen_benefit.checked) {
    windscreen_benefit_basic_premium.disabled = false;
  } else {
    windscreen_benefit_basic_premium.disabled = true;
  }
});

pvt.addEventListener("change", function () {
  if (pvt.checked) {
    pvt_basic_premium.disabled = false;
  } else {
    pvt_basic_premium.disabled = true;
  }
});
rescue_benefit.addEventListener("change", function () {
  if (rescue_benefit.checked) {
    rescue_benefit_basic_premium.disabled = false;
  } else {
    rescue_benefit_basic_premium.disabled = true;
  }
});
pll.addEventListener("change", function () {
  if (pll.checked) {
    pll_benefit_basic_premium.disabled = false;
  } else {
    pll_benefit_basic_premium.disabled = true;
  }
});
