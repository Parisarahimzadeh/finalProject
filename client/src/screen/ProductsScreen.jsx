import { Wrap, Center, WrapItem } from "@chakra-ui/react";
import { products } from '../products';
import ProductCart from "../components/ProductCart";

const ProductsScreen = () => {
  return (
    <Wrap spacing='30px' justify='center' minHeight='100vh'>
        {products.map((product) =>(
            <WrapItem key={product._id}>
                <Center w='250px' h='550px'>
                    <ProductCart product={product}/>
                </Center>
            </WrapItem>
       ))}
    </Wrap>
  )
}

export default ProductsScreen
