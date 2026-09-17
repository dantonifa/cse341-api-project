// Helpful link for converting image to base64: https://elmah.io
async function apiFetch(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const getData = async () => {
  const data = await apiFetch("http://localhost:8080/professional");

  // Clean array wrapper if present, fetching the first object payload inside index 0
  const flatData = Array.isArray(data) ? data[0] : data;

  displayAllData(flatData);
};

function displayAllData(data) {
  if (!data) return;
  displayProfessionalName(data.professionalName);
  displayImage(data.base64Image);
  displayPrimaryDescription(data);
  displayWorkDescription(data);
  displayLinkTitleText(data);
  displayLinkedInLink(data);
  displayGitHubLink(data);
}

function displayProfessionalName(n) {
  let professionalName = document.getElementById("professionalName");
  professionalName.innerHTML = n;
}

function displayImage(img) {
  let image = document.getElementById("professionalImage");
  image.src = `data:image/png;base64, ${img}`;
}

function displayPrimaryDescription(data) {
  let nameLink = document.getElementById("nameLink");
  // Safe navigation fallback structure to prevent undefined values
  nameLink.innerHTML = data.nameLink ? data.nameLink.firstName : "David";
  nameLink.href = data.nameLink ? data.nameLink.url : "#";

  let primaryDescription = document.getElementById("primaryDescription");
  // Fallback to empty string if the property is missing or named differently
  primaryDescription.innerHTML =
    data.primaryDescription || " - Software Engineer";
}

function displayWorkDescription(data) {
  let workDescription1 = document.getElementById("workDescription1");
  workDescription1.innerHTML = data.workDescription1 || "";
  let workDescription2 = document.getElementById("workDescription2");
  workDescription2.innerHTML = data.workDescription2 || "";
}

function displayLinkTitleText(data) {
  let linkTitle = document.getElementById("linkTitleText");
  linkTitle.innerHTML = data.linkTitleText || "My Professional Profiles";
}

function displayLinkedInLink(data) {
  let linkedInLink = document.getElementById("linkedInLink");
  if (data.linkedInLink) {
    linkedInLink.innerHTML = data.linkedInLink.text || "LinkedIn";
    linkedInLink.href = data.linkedInLink.link || data.linkedInLink.url || "#";
  }
}

function displayGitHubLink(data) {
  let githubLink = document.getElementById("githubLink");
  if (data.githubLink) {
    githubLink.innerHTML = data.githubLink.text || "GitHub";
    githubLink.href = data.githubLink.link || data.githubLink.url || "#";
  }
}

getData();
