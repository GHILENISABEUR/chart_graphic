const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'Sales Revenue',
        data: [12000, 15000, 18000, 20000, 22000, 25000, 28000, 30000, 27000, 24000, 20000, 18000],
        backgroundColor: 'rgba(40, 167, 69, 0.2)',
        borderColor: 'rgba(40, 167, 69, 1)',
        borderWidth: 1
    }]
};

const categoryData = {
    labels: ['Electronics', 'Clothing', 'Home Appliances'],
    datasets: [{
        data: [45000, 30000, 20000],
        backgroundColor: ['#007bff', '#dc3545', '#ffc107']
    }]
};

const regionData = {
    labels: ['North America', 'Europe', 'Asia Pacific'],
    datasets: [{
        label: 'Sales Revenue',
        data: [50000, 30000, 15000],
        backgroundColor: ['rgba(40, 167, 69, 0.2)', 'rgba(108, 117, 125, 0.2)', 'rgba(255, 193, 7, 0.2)'],
        borderColor: ['rgba(40, 167, 69, 1)', 'rgba(108, 117, 125, 1)', 'rgba(255, 193, 7, 1)'],
        borderWidth: 1
    }]
};

const revenueChart = new Chart(document.getElementById('revenue-chart'), {
    type: 'line',
    data: revenueData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const categoryChart = new Chart(document.getElementById('category-chart'), {
    type: 'pie',
    data: categoryData
});

const regionChart = new Chart(document.getElementById('region-chart'), {
    type: 'bar',
    data: regionData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});