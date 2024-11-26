export default function Menu() {
  return (
    <div className="menu">
      <h1>Most Popular</h1>
      <div className="popular">
        <div className="dish1">
          <img src="dish1.jpg" alt="dish1" />
          <div className="overlay">
            <h2>Pakistan Platter</h2>
            <p>
              (Served with Mint Sauce, Kachumer Salad & 1 
              Plain Naan) 1 Pc Chicken Seekh Kebab,  1 Pc Chicken Tikka (1/8), 1
              Portion Masala Biryani,  1 Portion Chicken Bharta (Boneless), 1
              Cold Drink Can, 3 Pcs Gulab Jama
            </p>
          </div>
        </div>
        <div className="dish2">
          <img src="dish2.jpg" alt="dish2" />
          <h2>Mutton Lover Platter </h2>
          <p>
          (Served with Mint Sauce, Kachumer Salad, 1 Plain Naan &1 Cold Drink Can) 1 Pc Mutton Seekh Kebab, 2 Pcs Mutton Boti (with Bone), 1 Portion Mutton Masala Biryani, 1 Portion Mutton Achari (with Bone), 3 Pcs Gulab Jaman.</p>
        </div>
        <div className="dish3">
          <img src="dish3.jpg" alt="dish3" />
          <h2>Special Mix Grill </h2>
          <p>(with Mutton Chanp) (Served with Brown Rice & Imlee Chutni)  2 Pcs Mutton Seekh Chanp, 2 Pcs Chicken Seekh Kebab, 2 Pcs Chicken Sheesh Taouk,  2 Pcs Chicken Behari Tikka, 2 Pcs Chicken Cheese Tikka, 2 Pcs BBQ Chicken Wings..</p>
        </div>
      </div>
      <div className="menu2">
      <img src="menu.webp" alt="Menu" /> 
      <img src="menu2.webp" alt="Menu" /> </div>
    </div>
  );
}
