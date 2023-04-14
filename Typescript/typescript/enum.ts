//An enum is a group of named constant values. Enum stands for enumerated type.

//style 1

enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}

function isItSummer(month: Month) {
  let isSummer: boolean;
  switch (month) {
    case Month.Jun:
    case Month.Jul:
    case Month.Aug:
      isSummer = true;
      break;
    default:
      isSummer = false;
      break;
  }
  return isSummer;
}

//style 2

enum UserRole {
  ADMIN = "admin",
  USER = "user",
}

if (UserRole.ADMIN) {
  console.log("Admin");
}

if (UserRole.USER) {
  console.log("User");
}

enum ApprovalStatus {
  draft,
  submitted,
  approved,
  rejected,
}

const request = {
  id: 1,
  status: ApprovalStatus.approved,
  description: "Please approve this request",
};

if (request.status === ApprovalStatus.approved) {
  // send an email
  console.log("Send email to the Applicant...");
}
