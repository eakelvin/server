const getCompanyStatus = (company) => {
  const now = new Date();
  const sevenDaysAgo = new Date(now.setDate(now.getDate() - 7));

  if (company.warning) {
    return {
      status: "warning",
      notes: company.warning,
    };
  }

  if (company.promotion) {
    return {
      status: "promotion",
      notes: company.promotion,
    };
  }

  if (company.createdAt >= sevenDaysAgo) {
    return {
      status: "new_listing",
      notes: "This is a new listing",
    };
  }

  return { status: null };
};

module.exports = { getCompanyStatus };
