
import puppeteer from 'puppeteer'
import fs from 'fs'

async function run() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(
     'https://www.tel-aviv.gov.il/Visitors/Events/Pages/Events.aspx');
    

    const linkForOfficialSite = await page.evaluate(() => {
     return Array.from(document.querySelectorAll('.itemTitleWithArrow')).map(
      (links) => links.href
     );
    });
    const titles = await page.evaluate(() => {
     return Array.from(document.querySelectorAll('.itemTitleWithArrow')).map(
      (title) => title.innerText
     );
    });
    const schedule = await page.evaluate(() => {
     return Array.from(document.querySelectorAll('.itemDateTime')).map(
      (teams) => teams.textContent
     );
    });
    

    const location = await page.evaluate(()=>{
        return Array.from(
         document.querySelectorAll('.itemLocation span')
        ).map((teams) => teams.textContent);
    })

    const photos = await page.evaluate(()=>{
        return Array.from(document.querySelectorAll('.evBenItemImage')).map(
         (imgs) =>{
               return imgs.style.backgroundImage.substring(
                84,
                imgs.style.backgroundImage.length - 1
               );
        }
        );
    })
    // console.log(
        //  '---------photos',
        //  photos,
        //  '---------location',
        //  location,
        //  '---------schedule',
        //  schedule,
        //  '---------linkForOfficialSite',
        //  linkForOfficialSite,
        //  '---------title',
        //  titles
        // );
        const data=[]
        for (let i = 0; i < photos.length; i++) {
            data.push(
                {
                    img:photos[i],
                    location:location[i],
                    schedule:schedule[i],
                    link:linkForOfficialSite[i],
                    title:titles[i]
                }
                )
                
            }
            // console.log(data);
            // await fs.writeFile("games.json" , JSON.stringify(data))
            fs.writeFileSync('./data.js',JSON.stringify(data))
            await browser.close()
            return  data
            // return[photos,location,schedule,linkForOfficialSite,titles]
}
const  a=run()
console.log('---');
// const [photos,location,schedule,linkForOfficialSite,titles]=run()