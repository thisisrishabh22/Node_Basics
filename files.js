const fs = require("fs");

// Read Ops
fs.readFile("./docs/exp.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

fs.readFile("./docs/data.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  if (data) {
    const fileData = data.toString();
    console.log(fileData);
  }
});

// Update Ops & Create Ops

fs.writeFile("./docs/exp.txt", "Hello New Node", () => {
  console.log("\nFile has been changed\n");
});

fs.writeFile("./docs/exp1.txt", "Hello New Node New File", () => {
  console.log("\nFile has been changed and added\n");
});

if (!fs.existsSync("./assets")) {
  console.log("Folder Doesn't Exists", "\nCreating Assets Folder\n");
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("\nAssets Folder Created\n");
    }
  });
} else {
  console.log("Folder Already Exists", "\nDeleting Assets Folder\n");
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
  });
}

if (!fs.existsSync("./docs/deleteMe.txt")) {
  fs.writeFile("./docs/deleteMe.txt", "", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Delete Me File Added \n");
    }
  });
}

// Delete Ops

if (fs.existsSync("./docs/deleteMe.txt")) {
  fs.unlink("./docs/deleteMe.txt", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("\nDelete Me Txt Deleted\n");
    }
  });
}

if (fs.existsSync("./docs/exp1.txt")) {
  fs.unlink("./docs/exp1.txt", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("\nExp 1 Txt Deleted\n");
    }
  });
}
