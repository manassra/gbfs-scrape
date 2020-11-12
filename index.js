import fetch from "node-fetch";
import fs from "fs";

(async function main() {
  const response = await fetch(
    "https://gbfs.baywheels.com/gbfs/en/free_bike_status.json"
  );
  const content = await response.json();
  fs.writeFileSync(
    "./sf.json",
    JSON.stringify(
      content.data.bikes.map((bike) => ({
        ...bike,
        lat: bike.lat + Math.random() * 0.00001,
        lon: bike.lon + Math.random() * 0.00001,
      }))
    )
  );
})();
