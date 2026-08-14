import fs from "fs";
import path from "path";

const navOld = `      <a href="/harlem/" class="mnav-link" style="padding:14px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Harlem</a>
      <a href="/upper-west-side/" class="mnav-link" style="padding:14px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Upper West Side</a>
      <a href="/upper-east-side/" class="mnav-link" style="padding:14px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Upper East Side</a>
      <a href="/chelsea/" class="mnav-link" style="padding:14px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Chelsea</a>
      <a href="/downtown-brooklyn/" class="mnav-link" style="padding:14px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Downtown Brooklyn</a>
      <a href="/dumbo/" class="mnav-link" style="padding:14px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Dumbo</a>
      <a href="/brooklyn-heights/" class="mnav-link" style="padding:14px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Brooklyn Heights</a>
      <a href="/bedford-stuyvesant/" class="mnav-link" style="padding:14px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Bedford-Stuyvesant</a>
      <a href="/williamsburg/" class="mnav-link" style="padding:14px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Williamsburg</a>
      <a href="/crown-heights/" class="mnav-link" style="padding:14px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Crown Heights</a>`;

const navNew = `      <a href="/harlem/" class="mnav-link" style="padding:14px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Harlem Realtor</a>
      <a href="/upper-west-side/" class="mnav-link" style="padding:14px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Upper West Side Realtor</a>
      <a href="/upper-east-side/" class="mnav-link" style="padding:14px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Upper East Side Realtor</a>
      <a href="/chelsea/" class="mnav-link" style="padding:14px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Chelsea Realtor</a>
      <a href="/downtown-brooklyn/" class="mnav-link" style="padding:14px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Downtown Brooklyn Realtor</a>
      <a href="/dumbo/" class="mnav-link" style="padding:14px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Dumbo Realtor</a>
      <a href="/brooklyn-heights/" class="mnav-link" style="padding:14px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Brooklyn Heights Realtor</a>
      <a href="/bedford-stuyvesant/" class="mnav-link" style="padding:14px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Bedford Stuyvesant Realtor</a>
      <a href="/williamsburg/" class="mnav-link" style="padding:14px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Williamsburg Realtor</a>
      <a href="/crown-heights/" class="mnav-link" style="padding:14px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Crown Heights Realtor</a>
      <a href="/park-slope/" class="mnav-link" style="padding:14px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Park Slope Realtor</a>`;

const footerOld = `     <a href="/harlem/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Harlem</a>
     <a href="/upper-east-side/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Upper East Side</a>
     <a href="/upper-west-side/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Upper West Side</a>
     <a href="/chelsea/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Chelsea</a>
     <a href="/downtown-brooklyn/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Downtown Brooklyn</a>
     <a href="/dumbo/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Dumbo</a>
     <a href="/brooklyn-heights/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Brooklyn Heights</a>
     <a href="/williamsburg/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Williamsburg</a>
     <a href="/bedford-stuyvesant/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Bedford-Stuyvesant</a>
     <a href="/crown-heights/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Crown Heights</a>
     <a href="/park-slope/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Park Slope</a>`;

const footerNew = `     <a href="/harlem/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Harlem Realtor</a>
     <a href="/upper-east-side/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Upper East Side Realtor</a>
     <a href="/upper-west-side/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Upper West Side Realtor</a>
     <a href="/chelsea/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Chelsea Realtor</a>
     <a href="/downtown-brooklyn/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Downtown Brooklyn Realtor</a>
     <a href="/dumbo/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Dumbo Realtor</a>
     <a href="/brooklyn-heights/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Brooklyn Heights Realtor</a>
     <a href="/williamsburg/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Williamsburg Realtor</a>
     <a href="/bedford-stuyvesant/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Bedford Stuyvesant Realtor</a>
     <a href="/crown-heights/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Crown Heights Realtor</a>
     <a href="/park-slope/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Park Slope Realtor</a>`;

const footerServicesOld = `     <a href="/harlem/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Harlem Realtor</a>
     <a href="/upper-east-side/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Upper East Side Realtor</a>
     <a href="/upper-west-side/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Upper West Side Realtor</a>
     <a href="/chelsea/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Chelsea Realtor</a>
     <a href="/downtown-brooklyn/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Downtown Brooklyn Realtor</a>
     <a href="/dumbo/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Dumbo Realtor</a>
     <a href="/brooklyn-heights/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Brooklyn Heights Realtor</a>
     <a href="/williamsburg/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Williamsburg Realtor</a>
     <a href="/bedford-stuyvesant/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Bedford-Stuyvesant</a>
     <a href="/crown-heights/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Crown Heights Realtor</a>
     <a href="/park-slope/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Park Slope Realtor</a>`;

const pagesDir = path.join("src", "pages");
const files = fs.readdirSync(pagesDir).filter((f) => f.endsWith(".tsx"));

for (const file of files) {
  const fp = path.join(pagesDir, file);
  let content = fs.readFileSync(fp, "utf8");
  let changed = false;
  if (content.includes(navOld)) {
    content = content.replace(navOld, navNew);
    changed = true;
  }
  if (content.includes(footerOld)) {
    content = content.replace(footerOld, footerNew);
    changed = true;
  }
  if (content.includes(footerServicesOld)) {
    content = content.replace(footerServicesOld, footerNew);
    changed = true;
  }
  if (changed) {
    fs.writeFileSync(fp, content);
    console.log("updated", file);
  }
}
