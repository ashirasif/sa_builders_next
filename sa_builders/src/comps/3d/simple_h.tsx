import { useGLTF } from "@react-three/drei"




const SimpleHouse = () => {

    const node = useGLTF('/simple.gltf')



    const materials = [];

    // Recursively traverse the scene to find mesh nodes and collect materials
    const traverse = (object) => {
      console.log(object)
      if (object.isMesh) {
        materials.push(object.material);
      }
      if (object.children && object.children.length > 0) {
        object.children.forEach(traverse);
      }
    };
  
    traverse(node.scene);
  
    // Modify the material properties if needed
    materials.forEach((material) => {
      if (material) {
        // Example: Change the color of the material
        
      }
    });
    

    return(
    
        <group>
            <primitive object={node.scene}/>
        </group>

    )
}

export default SimpleHouse


