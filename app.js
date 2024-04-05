const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Image with Text and Button Overlay</title>
<style>
  .image-container {
    position: relative;
    text-align: center;
  }

  .overlay-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 30px; /* Kích thước chữ lớn hơn */
    background-color: rgba(0, 0, 0, 0.6);
    padding: 20px;
    text-align: center;
    border-radius: 5px; 
  }

  .start-button {
    position: absolute;
    top: 65%; 
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 15px 30px; 
    font-size: 24px; 
    color: #fff;
    background-color: #28a745;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); 
  }

  img {
    width: 100%;
    height: auto;
  }
</style>
</head>
<body>

<div class="image-container">
  <img src="https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/168111/Originals/hinh%20nen%20may%20tinh%20dep%20(13)(1).jpg" alt="Nature Image">
  <div class="overlay-text">
    Kết quả bài thực hành<br>
    Cao Van Hai -22810310025
  </div>
  <button class="start-button" onclick="alert('Bắt đầu bài thực hành!')">Bắt Đầu</button>
</div>

</body>
</html>


`
