
const travel = (req, res) => {
    res.render('travel', {
        title: 'Travlr Getaways - Travel',
        isTravel: true
    });
};

module.exports = {
    travel
};
