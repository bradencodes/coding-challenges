const findGrantsCap = (grantsArray, newBudget) => {
  //initialize the cap by evenly dividing the budget across all grants
  let cap = newBudget / grantsArray.length;

  //this array stores all values over the cap
  let overArray = [];

  //the extra money from cheap grants
  let extra = 0;

  //takes in an array of grants and the cap amount, and returns the extra money
  let findExtra = (grants, cap) => {
    //reinitialize the extra amount and overArray
    extra = 0;
    overArray = [];

    grants.forEach(grant => {
      //if a grant is cheap, store the extra to give to other grants
      if (grant < cap) extra += cap-grant;
      //otherwise, store expensive grants in `overArray`
      else overArray.push(grant);
    })

    return extra;
  }

  //find the initial extra
  findExtra(grantsArray, cap);

  //as long as there is extra, raise the cap by averaging the extra amount across
  // the grants that need it
  while(extra) {
    cap += ( extra / overArray.length );
    extra = findExtra(overArray, cap);
  }

  return cap;
}