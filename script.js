
const menuItems = [
    // Appetizers
    { id: 1, name: "Spring Rolls", category: "appetizer", description: "Crispy spring rolls with dipping sauce.", price: 5.99, image: "images/spring-rolls.jpg" },
    { id: 2, name: "Bruschetta", category: "appetizer", description: "Tomato, basil, and garlic on toasted bread.", price: 6.99, image: "images/bruschetta.jpg" },
    { id: 3, name: "Stuffed Mushrooms", category: "appetizer", description: "Mushrooms stuffed with garlic, cheese, and herbs.", price: 7.49, image: "images/stuffed-mushrooms.avif" },

    // Main Courses
    { id: 4, name: "Chicken Curry", category: "main", description: "Delicious chicken curry served with rice.", price: 12.99, image: "images/chicken-curry.jpg" },
    { id: 5, name: "Beef Steak", category: "main", description: "Grilled beef steak with mashed potatoes and vegetables.", price: 18.99, image: "images/Beef Steak.webp" },
    { id: 6, name: "Spaghetti Carbonara", category: "main", description: "Classic spaghetti with creamy carbonara sauce.", price: 10.99, image: "images/paghetti-carbonara.jpg" },

    // Desserts
    { id: 7, name: "Cheesecake", category: "dessert", description: "Classic New York cheesecake with a graham cracker crust.", price: 7.99, image: "images/Cheescake.webp" },
    { id: 8, name: "Chocolate Lava Cake", category: "dessert", description: "Rich chocolate cake with a molten center.", price: 8.99, image: "images/chocolate-lava-cake.jpg" },
    { id: 9, name: "Tiramisu", category: "dessert", description: "Classic Italian dessert made with coffee-soaked ladyfingers.", price: 6.99, image: "images/tiramisu.jpg" },

    // Salads
    { id: 10, name: "Caesar Salad", category: "salads", description: "Crispy romaine lettuce with Caesar dressing and croutons.", price: 6.99, image: "images/caesar-salad.jpg" },
    { id: 11, name: "Greek Salad", category: "salads", description: "Tomatoes, cucumbers, olives, and feta cheese with olive oil.", price: 7.49, image: "images/greek-salad.jpg" },
    { id: 12, name: "Garden Salad", category: "salads", description: "A fresh mix of seasonal vegetables with balsamic vinaigrette.", price: 5.99, image: "images/garden-salad.jpg" },

    // Beverages
    { id: 13, name: "Iced Tea", category: "beverages", description: "Chilled and refreshing iced tea with lemon.", price: 2.99, image: "images/iced-tea.jpg" },
    { id: 14, name: "Fresh Lemonade", category: "beverages", description: "Homemade lemonade with fresh lemons.", price: 3.49, image: "images/fresh-lemonade.jpg" },
    { id: 15, name: "Cappuccino", category: "beverages", description: "Espresso with steamed milk and a touch of foam.", price: 4.49, image: "images/cappuccino.jpg" },

    // Soups
    { id: 16, name: "Tomato Soup", category: "soup", description: "Classic creamy tomato soup with grilled cheese croutons.", price: 4.99, image: "images/tomato-soup.jpg" },
    { id: 17, name: "Chicken Noodle Soup", category: "soup", description: "A hearty soup with chicken, noodles, and vegetables.", price: 5.49, image: "images/chicken-noodle-soup.jpg" },
    { id: 18, name: "Minestrone Soup", category: "soup", description: "Italian vegetable soup with beans and pasta.", price: 5.99, image: "images/minestrone-soup.jpg" },

    // Vegan
    { id: 19, name: "Vegan Burger", category: "vegan", description: "A plant-based burger served with avocado and lettuce.", price: 9.99, image: "images/vegan-burger.jpg" },
    { id: 20, name: "Vegan Tacos", category: "vegan", description: "Tacos filled with seasoned vegetables and plant-based protein.", price: 8.99, image: "images/vegan-tacos.jpg" },
    { id: 21, name: "Vegan Pizza", category: "vegan", description: "Thin crust pizza with vegan cheese and vegetables.", price: 10.99, image: "images/vegan-pizza.jpg" },

    // Gluten-Free
    { id: 22, name: "Gluten-Free Pizza", category: "glutenFree", description: "Gluten-free pizza with fresh veggies and mozzarella.", price: 11.99, image: "images/gluten-free-pizza.jpg" },
    { id: 23, name: "Gluten-Free Pancakes", category: "glutenFree", description: "Fluffy gluten-free pancakes served with maple syrup.", price: 7.49, image: "images/gluten-free-pancakes.jpg" },
    { id: 24, name: "Gluten-Free Pasta", category: "glutenFree", description: "Gluten-free pasta with a tomato basil sauce.", price: 9.49, image: "images/gluten-free-pasta.jpg" },

    // Seafood
    { id: 25, name: "Grilled Salmon", category: "seafood", description: "Freshly grilled salmon served with lemon and asparagus.", price: 15.99, image: "images/grilled-salmon.jpg" },
    { id: 26, name: "Shrimp Cocktail", category: "seafood", description: "Chilled shrimp served with a tangy cocktail sauce.", price: 12.49, image: "images/shrimp-cocktail.jpg" },
    { id: 27, name: "Fish Tacos", category: "seafood", description: "Soft tacos filled with grilled fish, cabbage, and sauce.", price: 10.99, image: "images/fish-tacos.jpg" },

    // Pasta
    { id: 28, name: "Spaghetti Bolognese", category: "pasta", description: "Spaghetti with a hearty meat sauce.", price: 11.99, image: "images/spaghetti-bolognese.jpg" },
    { id: 29, name: "Penne Alfredo", category: "pasta", description: "Penne pasta with a creamy Alfredo sauce.", price: 10.49, image: "images/penne-alfredo.jpg" },
    { id: 30, name: "Lasagna", category: "pasta", description: "Classic Italian lasagna with layers of pasta and meat sauce.", price: 12.99, image: "images/lasagna.jpg" },

    // Pizza
    { id: 31, name: "Pepperoni Pizza", category: "pizza", description: "Classic pizza with pepperoni and mozzarella.", price: 9.99, image: "images/pepperoni-pizza.jpg" },
    { id: 32, name: "Vegetarian Pizza", category: "pizza", description: "Pizza topped with mushrooms, olives, and peppers.", price: 11.49, image: "images/vegetarian-pizza.jpg" },
    { id: 33, name: "BBQ Chicken Pizza", category: "pizza", description: "Pizza with BBQ chicken, onions, and cilantro.", price: 12.99, image: "images/bbq-chicken-pizza.jpg" },

    // Snacks
    { id: 34, name: "French Fries", category: "snacks", description: "Crispy fries served with ketchup.", price: 3.99, image: "images/french-fries.jpg" },
    { id: 35, name: "Onion Rings", category: "snacks", description: "Crispy battered onion rings.", price: 4.49, image: "images/onion-rings.jpg" },
    { id: 36, name: "Mozzarella Sticks", category: "snacks", description: "Breaded and fried mozzarella sticks with marinara sauce.", price: 5.99, image: "images/mozzarella-sticks.jpg" },

    // Steaks
    { id: 37, name: "Ribeye Steak", category: "steaks", description: "Juicy ribeye steak served with sides.", price: 19.99, image: "images/ribeye-steak.jpg" },
    { id: 38, name: "Filet Mignon", category: "steaks", description: "Tender filet mignon cooked to perfection.", price: 21.99, image: "images/filet-mignon.jpg" },
    { id: 39, name: "T-bone Steak", category: "steaks", description: "Grilled T-bone steak with a side of vegetables.", price: 22.49, image: "images/t-bone-steak.jpg" },

    // Sushi
    { id: 40, name: "California Roll", category: "sushi", description: "Sushi roll with crab, avocado, and cucumber.", price: 10.99, image: "images/california-roll.jpg" },
    { id: 41, name: "Tuna Sashimi", category: "sushi", description: "Fresh tuna slices served as sashimi.", price: 14.49, image: "images/tuna-sashimi.jpg" },
    { id: 42, name: "Salmon Nigiri", category: "sushi", description: "Fresh salmon on vinegared rice.", price: 12.99, image: "images/salmon-nigiri.jpg" },
];

// Elements
const menuContainer = document.getElementById('menu');
const orderList = document.getElementById('orderList');
const searchBar = document.getElementById('searchBar');
let order = [];

// menu items
function displayMenu(filteredItems) {
    menuContainer.innerHTML = ''; // Clear the menu container

    filteredItems.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('menu-item');
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p><strong>$${item.price}</strong></p>
            <button onclick="addToOrder(${item.id})">Add to Order</button>
        `;
        menuContainer.appendChild(div);
    });
}

// Function to filter items by category
function filterItems(category) {
    if (category === 'all') {
        displayMenu(menuItems);
    } else {
        const filteredItems = menuItems.filter(item => item.category === category);
        displayMenu(filteredItems);
    }
}

 to add an item to the order
function addToOrder(itemId) {
    const item = menuItems.find(item => item.id === itemId);
    order.push(item);
    displayOrder();
}

// Function to display the order
function displayOrder() {
    orderList.innerHTML = '';
    order.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        orderList.appendChild(li);
    });
}

// Function to handle the order submission (payment simulation)
function submitOrder() {
    if (order.length === 0) {
        alert("Your order is empty.");
    } else {
        alert("Your order has been submitted! Thank you for your purchase.");
        order = []; // Clear the order after submission
        displayOrder();
    }
}

// Search functionality
searchBar.addEventListener('input', () => {
    const searchQuery = searchBar.value.toLowerCase();
    const filteredItems = menuItems.filter(item => item.name.toLowerCase().includes(searchQuery));
    displayMenu(filteredItems);
});

// Initial display of all menu items
filterItems('all');
