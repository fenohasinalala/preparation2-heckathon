

/*  category( */
INSERT INTO category(name_category) VALUES ('non alcoholic');
INSERT INTO category(name_category) VALUES ('alcoholic');

/* drink( */
INSERT INTO drink(name_drink,price_drink,category_id_category) VALUES ('water',0,1);
INSERT INTO drink(name_drink,price_drink,category_id_category) VALUES ('gin',2000,1);
INSERT INTO drink(name_drink,price_drink,category_id_category) VALUES ('rum',3000,2);
INSERT INTO drink(name_drink,price_drink,category_id_category) VALUES ('tequila',4000,2);
INSERT INTO drink(name_drink,price_drink,category_id_category) VALUES ('vodka',4500,2);
INSERT INTO drink(name_drink,price_drink,category_id_category) VALUES ('simple syrup',2000,1);
INSERT INTO drink(name_drink,price_drink,category_id_category) VALUES ('lemon juice',3000,1);
INSERT INTO drink(name_drink,price_drink,category_id_category) VALUES ('cola',3500,1);
INSERT INTO drink(name_drink,price_drink,category_id_category) VALUES ('Applejack',4000,1);
INSERT INTO drink(name_drink,price_drink,category_id_category) VALUES ('grenadine',3500,1);
INSERT INTO drink(name_drink,price_drink,category_id_category) VALUES ('club soda',2000,1);
INSERT INTO drink(name_drink,price_drink,category_id_category) VALUES ('ginger ale',4000,1);
INSERT INTO drink(name_drink,price_drink,category_id_category) VALUES ('tomato juice',2500,1);

/* cocktail( */
INSERT INTO cocktail(name_cocktail) VALUES ('Long Island Iced Tea');
INSERT INTO cocktail(name_cocktail) VALUES ('Jack Rose');
INSERT INTO cocktail(name_cocktail) VALUES ('Tom Collins');
INSERT INTO cocktail(name_cocktail) VALUES ('Gin Buck');
INSERT INTO cocktail(name_cocktail) VALUES ('Bloody Mary');

/* compose( */
INSERT INTO compose(cocktail_id_cocktail,drink_id_drink) VALUES (1,2);
INSERT INTO compose(cocktail_id_cocktail,drink_id_drink) VALUES (1,3);
INSERT INTO compose(cocktail_id_cocktail,drink_id_drink) VALUES (1,4);
INSERT INTO compose(cocktail_id_cocktail,drink_id_drink) VALUES (1,5);
INSERT INTO compose(cocktail_id_cocktail,drink_id_drink) VALUES (1,6);
INSERT INTO compose(cocktail_id_cocktail,drink_id_drink) VALUES (1,7);
INSERT INTO compose(cocktail_id_cocktail,drink_id_drink) VALUES (1,8);
INSERT INTO compose(cocktail_id_cocktail,drink_id_drink) VALUES (2,9);
INSERT INTO compose(cocktail_id_cocktail,drink_id_drink) VALUES (2,7);
INSERT INTO compose(cocktail_id_cocktail,drink_id_drink) VALUES (2,10);
INSERT INTO compose(cocktail_id_cocktail,drink_id_drink) VALUES (3,2);
INSERT INTO compose(cocktail_id_cocktail,drink_id_drink) VALUES (3,7);
INSERT INTO compose(cocktail_id_cocktail,drink_id_drink) VALUES (3,6);
INSERT INTO compose(cocktail_id_cocktail,drink_id_drink) VALUES (3,11);
INSERT INTO compose(cocktail_id_cocktail,drink_id_drink) VALUES (4,1);
INSERT INTO compose(cocktail_id_cocktail,drink_id_drink) VALUES (4,2);
INSERT INTO compose(cocktail_id_cocktail,drink_id_drink) VALUES (4,7);
INSERT INTO compose(cocktail_id_cocktail,drink_id_drink) VALUES (4,12);
INSERT INTO compose(cocktail_id_cocktail,drink_id_drink) VALUES (5,5);
INSERT INTO compose(cocktail_id_cocktail,drink_id_drink) VALUES (5,13);

/* rollback transaction; annuler les modifications*/
