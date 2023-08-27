const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
            <img src="img/logo.jpg" class="logo" alt="">
            <div class="footer-ul-container">  
                <ul class="category">
                    <li class="category-title">men</li>
                    <li><a href="3" class="footer-link">t-shirts</a></li>
                    <li><a href="3" class="footer-link">sweatshirts</a></li>
                    <li><a href="3" class="footer-link">shirts</a></li>
                    <li><a href="3" class="footer-link">jeans</a></li>
                    <li><a href="3" class="footer-link">trousers</a></li>
                    <li><a href="3" class="footer-link">shoes</a></li>
                    <li><a href="3" class="footer-link">casuals</a></li>
                    <li><a href="3" class="footer-link">formals</a></li>
                    <li><a href="3" class="footer-link">sports</a></li>
                    <li><a href="3" class="footer-link">whatches</a></li>
                </ul>

                <ul class="category">
                    <li class="category-title">women</li>
                    <li><a href="3" class="footer-link">t-shirts</a></li>
                    <li><a href="3" class="footer-link">sweatshirts</a></li>
                    <li><a href="3" class="footer-link">shirts</a></li>
                    <li><a href="3" class="footer-link">jeans</a></li>
                    <li><a href="3" class="footer-link">trousers</a></li>
                    <li><a href="3" class="footer-link">shoes</a></li>
                    <li><a href="3" class="footer-link">casuals</a></li>
                    <li><a href="3" class="footer-link">formals</a></li>
                    <li><a href="3" class="footer-link">sports</a></li>
                    <li><a href="3" class="footer-link">whatches</a></li>
                </ul>
            </div>

        </div>
        <p class="footer-title">about company</p>
            <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis omnis fugiat nostrum non quas aliquam repellendus voluptates optio voluptas. Sunt nihil minus adipisci est nemo quo illo eveniet? Corrupti, voluptatem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quisquam numquam provident eum dicta nisi modi qui, magni id, dolores, quos quidem odio perferendis quasi ratione placeat. Optio, quas obcaecati.</p>

            <p class="info">support emails - help@clothing.com,
                customersupport@clothing.com</p>

            <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>

            <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">terms & services</a>
                <a href="#" class="social-link">privacy page</a>
            </div>

            <div class="social-items">
            <ul class="socials">
                <li><a href="404.html"><i class="fa fa-facebook-square"></i></a></li>
                <li><a href="404.html"><i class="fa fa-linkedin-square"></i></a></li>
                <li><a href="404.html"><i class="fa fa-twitter-square"></i></a></li>
                <li><a href="404.html"><i class="fa fa-instagram"></i></a></li>
                <li><a href="404.html"><i class="fa fa-tumblr-square"></i></a></li>
            </ul>
        </div>

            <p class="footer-credit">Clothing, Best appearels online store</p>
    `;
}

createFooter();