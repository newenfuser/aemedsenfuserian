
import { fetchPlaceholders,getMetadata } from '../../scripts/aem.js';
console.log(getMetadata("locale"));
const placeholders = await fetchPlaceholders(getMetadata("locale"));
console.log(placeholders);
//const { fnameKey,lnameKey,roleKey, orgKey, cntryKey, header, firstName, lastName, Role, organization, country) = placeholders;
const { fnameKey,lnameKey,roleKey,orgKey,header,firstName,lastName,role,organization} = placeholders;
export default function decorate(block) {
  const headingDiv=document.createElement('div');
  headingDiv.classList.add("table-heading");
  const htext=document.createTextNode(header);
  const headingH1=document.createElement('h1');
  headingH1.append(htext);
  headingDiv.append(headingH1);

  const table = document.createElement('table');

  let tr=document.createElement("tr");
  let fnl=document.createElement("td");
  fnl.appendChild(document.createTextNode(fnameKey));tr.append(fnl);
  let fn=document.createElement("td");
      fn.appendChild(document.createTextNode(firstName));
      tr.append(fn);
  table.append(tr);

  let tr1=document.createElement("tr");
  let lnl=document.createElement("td");
  lnl.appendChild(document.createTextNode(lnameKey));
  tr1.append(lnl);
  let ln=document.createElement("td");
  ln.appendChild(document.createTextNode(lastName));
  tr1.append(ln);
  table.append(tr1);

 let tr3=document.createElement("tr");
  let lnl3=document.createElement("td");
  lnl3.appendChild(document.createTextNode(roleKey));
  tr3.append(lnl3);
  let ln3=document.createElement("td");
  ln3.appendChild(document.createTextNode(role));
  tr3.append(ln3);
  table.append(tr3);

  let tr4=document.createElement("tr");
    let lnl4=document.createElement("td");
    lnl4.appendChild(document.createTextNode(orgKey));
    tr4.append(lnl4);
    let ln4=document.createElement("td");
    ln4.appendChild(document.createTextNode(organization));
    tr4.append(ln4);
    table.append(tr4);

  [...block.children].forEach((row,r) => {
    let trow=document.createElement("tr");
    [...row.children].forEach((col,c) => {
      console.log(" Row : Col  ",r,c);
      let tcol=document.createElement("td");
      tcol.appendChild(col);
      trow.append(tcol);
      row.replaceWith(trow);
    });
    table.append(trow);
  });
  block.append(headingDiv);
  block.append(table);
}