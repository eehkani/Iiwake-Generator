const displayIiwake = document.getElementById("display_iiwake");

const generateIiwake = async () => {
  const response = await fetch("https://excuser-three.vercel.app/v1/excuse");
  const data = await response.json();

  displayIiwake.innerText = data[0].excuse;
};

const copyIiwake = async () => {
  const iiwake = document.getElementById("display_iiwake").textContent;

  await navigator.clipboard.writeText(iiwake);

  alert("言い訳をコピーしました！");
};