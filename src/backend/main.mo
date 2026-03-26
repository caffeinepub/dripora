import Text "mo:core/Text";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Set "mo:core/Set";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Principal "mo:core/Principal";

actor {
  type ProductId = Nat;

  public type Category = {
    #tops;
    #bottoms;
    #outerwear;
    #accessories;
  };

  public type Tag = {
    #old_school;
    #futuristic;
    #streetwear;
    #y2k;
    #techwear;
  };

  public type Product = {
    id : ProductId;
    name : Text;
    price : Float;
    category : Category;
    tag : Tag;
    imageUrl : Text;
    description : Text;
  };

  module Product {
    public func compare(product1 : Product, product2 : Product) : Order.Order {
      Text.compare(product1.name, product2.name);
    };
  };

  var nextProductId : ProductId = 1;

  let products = Map.empty<ProductId, Product>();
  let emails = Set.empty<Text>();
  let admins = Set.fromIter([Principal.fromText("2vxsx-fae")].values());

  func findProductInternal(productId : ProductId) : Product {
    switch (products.get(productId)) {
      case (null) { Runtime.trap("Product with id " # productId.toText() # " does not exist.") };
      case (?product) { product };
    };
  };

  public query ({ caller }) func getProduct(productId : ProductId) : async Product {
    findProductInternal(productId);
  };

  func checkAdmin(caller : Principal) {
    if (not admins.contains(caller)) {
      Runtime.trap("Unauthorized. Admin privileges required.");
    };
  };

  func getNextProductId() : ProductId {
    let id = nextProductId;
    nextProductId += 1;
    id;
  };

  public shared ({ caller }) func addProduct(newProduct : Product) : async ProductId {
    checkAdmin(caller);

    let id = getNextProductId();
    let product : Product = {
      newProduct with
      id;
    };
    products.add(id, product);
    id;
  };

  public shared ({ caller }) func updateProduct(productId : ProductId, updatedProduct : Product) : async () {
    checkAdmin(caller);
    ignore findProductInternal(productId);

    let product : Product = {
      updatedProduct with
      id = productId;
    };
    products.add(productId, product);
  };

  public shared ({ caller }) func addEmail(email : Text) : async () {
    emails.add(email);
  };

  public shared ({ caller }) func getAllEmails() : async [Text] {
    emails.toArray();
  };

  public query ({ caller }) func getAllProducts() : async [Product] {
    products.values().toArray().sort();
  };

  public query ({ caller }) func getProductsByCategory(category : Category) : async [Product] {
    products.values().filter(
      func(product) { product.category == category }
    ).toArray().sort();
  };

  public query ({ caller }) func getProductsByTag(tag : Tag) : async [Product] {
    products.values().filter(
      func(product) { product.tag == tag }
    ).toArray().sort();
  };

  public shared ({ caller }) func seedProducts() : async () {
    checkAdmin(caller);
    if (products.size() > 0) { Runtime.trap("Products already seeded") };

    let seedProducts : [Product] = [
      {
        id = 0;
        name = "Retro Varsity Jacket";
        price = 120.00;
        category = #outerwear;
        tag = #old_school;
        imageUrl = "https://example.com/images/varsity_jacket.jpg";
        description = "Classic varsity jacket with chenille patches and striped ribbed trims.";
      },
      {
        id = 0;
        name = "Y2K Denim Cargo Pants";
        price = 80.00;
        category = #bottoms;
        tag = #y2k;
        imageUrl = "https://example.com/images/denim_cargo.jpg";
        description = "Baggy distressed denim cargo pants with utility pockets";
      },
      {
        id = 0;
        name = "Futuristic Tech Hoodie";
        price = 95.00;
        category = #tops;
        tag = #techwear;
        imageUrl = "https://example.com/images/tech_hoodie.jpg";
        description = "Water-resistant hoodie with concealed zipper pockets and reflective trims";
      },
      {
        id = 0;
        name = "Streetwear Beanie";
        price = 25.00;
        category = #accessories;
        tag = #streetwear;
        imageUrl = "https://example.com/images/beanie.jpg";
        description = "Ribbed knit beanie in bold colors with logo patch";
      },
      {
        id = 0;
        name = "Oversized Rugby Polo";
        price = 70.00;
        category = #tops;
        tag = #old_school;
        imageUrl = "https://example.com/images/rugby_polo.jpg";
        description = "Thick stripe rugby shirt with oversized collar";
      },
      {
        id = 0;
        name = "Tech Shell Jacket";
        price = 135.00;
        category = #outerwear;
        tag = #futuristic;
        imageUrl = "https://example.com/images/shell_jacket.jpg";
        description = "Lightweight shell jacket with taped seams and futuristic print";
      },
      {
        id = 0;
        name = "Baggy Patchwork Jeans";
        price = 85.00;
        category = #bottoms;
        tag = #streetwear;
        imageUrl = "https://example.com/images/patchwork_jeans.jpg";
        description = "Baggy fit patchwork denim jeans with frayed hems";
      },
      {
        id = 0;
        name = "UV Reactive Belt Bag";
        price = 45.00;
        category = #accessories;
        tag = #techwear;
        imageUrl = "https://example.com/images/belt_bag.jpg";
        description = "UV-reactive nylon belt bag with adjustable strap";
      },
    ];

    for (product in seedProducts.values()) {
      let id = getNextProductId();
      let newProduct : Product = {
        product with
        id;
      };
      products.add(id, newProduct);
    };
  };
};
