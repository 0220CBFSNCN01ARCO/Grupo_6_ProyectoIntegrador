-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: lfg
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'oferta'),(2,'destacado'),(3,'nuevo'),(4,'baja');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `color`
--

DROP TABLE IF EXISTS `color`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `color` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `color`
--

LOCK TABLES `color` WRITE;
/*!40000 ALTER TABLE `color` DISABLE KEYS */;
INSERT INTO `color` VALUES (1,'blanco'),(2,'negro'),(3,'rojo'),(4,'azul'),(5,'celeste');
/*!40000 ALTER TABLE `color` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cuota`
--

DROP TABLE IF EXISTS `cuota`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cuota` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cuota`
--

LOCK TABLES `cuota` WRITE;
/*!40000 ALTER TABLE `cuota` DISABLE KEYS */;
INSERT INTO `cuota` VALUES (1,'0'),(2,'1'),(3,'3'),(4,'6'),(5,'12'),(6,'18');
/*!40000 ALTER TABLE `cuota` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalleorden`
--

DROP TABLE IF EXISTS `detalleorden`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detalleorden` (
  `id` int NOT NULL,
  `cantidad` int NOT NULL,
  `precioUnitario` int NOT NULL,
  `idOrden` int NOT NULL,
  `idProducto` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_detalleOrden_orden1_idx` (`idOrden`),
  KEY `fk_detalleOrden_producto1_idx` (`idProducto`),
  CONSTRAINT `fk_detalleOrden_orden1` FOREIGN KEY (`idOrden`) REFERENCES `orden` (`id`),
  CONSTRAINT `fk_detalleOrden_producto1` FOREIGN KEY (`idProducto`) REFERENCES `producto` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalleorden`
--

LOCK TABLES `detalleorden` WRITE;
/*!40000 ALTER TABLE `detalleorden` DISABLE KEYS */;
/*!40000 ALTER TABLE `detalleorden` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `domicilio`
--

DROP TABLE IF EXISTS `domicilio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `domicilio` (
  `id` int NOT NULL,
  `calle` varchar(45) DEFAULT NULL,
  `numero` int DEFAULT NULL,
  `localidad` varchar(45) DEFAULT NULL,
  `barrio` varchar(45) DEFAULT NULL,
  `idUsuario` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_domicilio_usuario1_idx` (`idUsuario`),
  CONSTRAINT `fk_domicilio_usuario1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `domicilio`
--

LOCK TABLES `domicilio` WRITE;
/*!40000 ALTER TABLE `domicilio` DISABLE KEYS */;
/*!40000 ALTER TABLE `domicilio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `formadepago`
--

DROP TABLE IF EXISTS `formadepago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `formadepago` (
  `id` int NOT NULL,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `formadepago`
--

LOCK TABLES `formadepago` WRITE;
/*!40000 ALTER TABLE `formadepago` DISABLE KEYS */;
/*!40000 ALTER TABLE `formadepago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marca`
--

DROP TABLE IF EXISTS `marca`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marca` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marca`
--

LOCK TABLES `marca` WRITE;
/*!40000 ALTER TABLE `marca` DISABLE KEYS */;
INSERT INTO `marca` VALUES (1,'iphone'),(2,'samsung'),(3,'motorola'),(4,'nokia'),(5,'alcatel'),(6,'sony'),(7,'xiaomi'),(8,'lenovo'),(9,'htc');
/*!40000 ALTER TABLE `marca` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orden`
--

DROP TABLE IF EXISTS `orden`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orden` (
  `id` int NOT NULL,
  `total` int NOT NULL,
  `idDomicilio` int NOT NULL,
  `idUsuario` int unsigned NOT NULL,
  `idFormaDePago` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_orden_domicilio1_idx` (`idDomicilio`),
  KEY `fk_orden_usuario1_idx` (`idUsuario`),
  KEY `fk_orden_formaDePago1_idx` (`idFormaDePago`),
  CONSTRAINT `fk_orden_domicilio1` FOREIGN KEY (`idDomicilio`) REFERENCES `domicilio` (`id`),
  CONSTRAINT `fk_orden_formaDePago1` FOREIGN KEY (`idFormaDePago`) REFERENCES `formadepago` (`id`),
  CONSTRAINT `fk_orden_usuario1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orden`
--

LOCK TABLES `orden` WRITE;
/*!40000 ALTER TABLE `orden` DISABLE KEYS */;
/*!40000 ALTER TABLE `orden` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `descripcion` longtext,
  `precio` decimal(10,0) DEFAULT NULL,
  `stock` varchar(45) DEFAULT NULL,
  `foto` longblob,
  `idMarca` int DEFAULT NULL,
  `idCategoria` int DEFAULT NULL,
  `idColor` int DEFAULT NULL,
  `idCuota` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idMarca_idx` (`idMarca`),
  KEY `idCategoria` (`idCategoria`),
  KEY `idColor_idx` (`idColor`),
  KEY `idCuotas_idx` (`idCuota`),
  CONSTRAINT `idCategoria` FOREIGN KEY (`idCategoria`) REFERENCES `categoria` (`id`),
  CONSTRAINT `idColor` FOREIGN KEY (`idColor`) REFERENCES `color` (`id`),
  CONSTRAINT `idCuotas` FOREIGN KEY (`idCuota`) REFERENCES `cuota` (`id`),
  CONSTRAINT `idMarca` FOREIGN KEY (`idMarca`) REFERENCES `marca` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (11,'LG K50s','•	Pantalla: 6.5 pulgadas HD+ FullVision.\r\n•	Procesador: 2.0GHz MediaTek MT6762.\r\n•	RAM: 3GB.\r\n•	Almacenamiento: 32GB.\r\n•	MicroSD: Sí\r\n•	Batería: 4,000mAh.\r\n•	Cámaras traseras: 13 megapixeles + 5 megapixeles (gran angular) + 2 megapixeles (para detectar la profundidad)\r\n•	Cámara frontal: 13 megapixeles.\r\n',23999,'10',_binary 'imagen-producto-1594692363821.webp',1,1,2,6),(12,'LG Q60','•	Pantalla de 6.26 pulgadas (HD+) y aspecto 19:9.\r\n•	Procesador de ocho núcleos a 2.0GHz.\r\n•	Memoria RAM: 3GB.\r\n•	Almacenamiento: 64GB (con espacio para microSD de hasta 2TB)\r\n•	Cámara trasera: 16 megapixeles + 2 megapixeles (con profundidad) + 5 megapixeles con IA.\r\n•	Cámara frontal: 13 megapixeles\r\n',34000,'10',_binary 'imagen-producto-1594692514440.webp',1,1,2,6),(13,'MOTOROLA E6','•	Pantalla: 6.1 pulgadas.\r\n•	Resolución: 1,560x720 pixeles.\r\n•	Procesador: MediaTek Helio P22.\r\n•	RAM: 2GB, 4GB.\r\n•	Almacenamiento: 32GB, 64GB.\r\n•	MicroSD: Sí\r\n•	Batería: 3,000mAh.\r\n•	Cámaras traseras: 13 megapixeles + 2 megapixeles (detectar profundidad)\r\n',25000,'20',_binary 'imagen-producto-1594692608693.webp',3,1,2,6),(14,'NOKIA 7.1','•	Procesador – Qualcomm Snapdragon 636. 8 x Kryo 260 a 1.8 GHz. ...\r\n•	Memoria RAM: 3 / 4 GB.\r\n•	Almacenamiento. Interno: 32 / 64 GB. ...\r\n•	Gráfica: Adreno 509.\r\n•	Pantalla. Tamaño: 5.87 pulgadas. ...\r\n•	Cámara trasera principal. Resolución: 12 Mpx . ...\r\n•	Cámara trasera secundaria (sensor de profundidad). ...\r\n•	Cámara delantera.\r\n',65000,'20',_binary 'imagen-producto-1594692728779.webp',4,2,3,6),(15,'Samsung Galaxy A30S','•	PANTALLA	Super AMOLED de 6,4 pulgadas\r\nRatio 19.5:9\r\nHD+ a 1.560 x 720\r\nInfinity-V\r\n•	PROCESADOR	Exynos 7904 a 1,8GHz\r\n•	VERSIONES	3GB/32GB\r\n4GB/64GB\r\n4GB/128GB\r\nMicroSD hasta 512GB\r\n•	CÁMARA TRASERA	25 megapíxeles f/1.7\r\n5 megapíxeles desenfoque\r\n8 megapíxeles ultra gran angular\r\n•	CÁMARA FRONTAL	16 megapíxeles f/2.0\r\n•	SOFTWARE	Android 9 Pie\r\nOne UI\r\n•	DIMENSIONES Y PESO	158,5 x 74,7 x 7,8 milímetros\r\n166 gramos\r\n•	BATERÍA	4.000 mAh\r\nCarga rápida de 15W\r\n',50000,'22',_binary 'imagen-producto-1594692962803.webp',2,2,2,6),(16,'Samsung Galaxy A50S','PANTALLA\r\n\r\nSuper AMOLED 6,4\" FHD+\r\n1080 x 2340\r\n\r\nDIMENSIONES Y PESO\r\n\r\n158,5 x 74,5 x 7,7 mm\r\n169 g.\r\n\r\nPROCESADOR\r\n\r\nOcho núcleos:\r\n4 x 2,3 GHz\r\n4 x 1,7 GHz\r\n\r\nRAM\r\n\r\n4 GB\r\n6 GB\r\n\r\nALMACENAMIENTO\r\n\r\n64 GB\r\n128 GB\r\nMicroSD hasta 512 GB\r\n\r\nCÁMARA FRONTAL\r\n\r\n32 MP f/2.0\r\n\r\nCÁMARA TRASERA\r\n\r\n48MP F/2.0\r\n5MP\r\n8MP gran angular\r\n\r\nBATERÍA\r\n\r\n4.000 mAh\r\nCarga rápida 15W',75000,'25',_binary 'imagen-producto-1594693069195.webp',2,2,3,6),(17,'Samsung Galaxy Note 10','Pantalla: 6.3 pulgadas, primera pantalla de celular con certificación HDR+ (Dynamic OLED)\r\nResolución: 2,280x1,080 pixeles.\r\nProcesador: 2.84GHz Snapdragon 855 / 2.7GHz Exynos 9825, dependiendo del mercado.\r\nRAM: 8GB.\r\nAlmacenamiento: 256GB (UFS 3.0)\r\nRanura microSD: Sí',125000,'8',_binary 'imagen-producto-1594693174339.webp',2,2,2,6),(18,'Samsung Galaxy S10','DIMENSIONES Y PESO\r\n\r\n149,9 x 70,4 x 7,8 milímetros\r\n157 gramos\r\n\r\nPANTALLA\r\n\r\nDynamic AMOLED de 6,1\"\r\n19:9\r\nQHD+\r\n3.040 x 1.440\r\nGorilla Glass 6\r\n\r\nPROCESADOR\r\n\r\nExynos 9820\r\n\r\nVERSIONES\r\n\r\n8GB/128GB\r\n8GB/512GB\r\nMicroSD hasta 512GB\r\n\r\nCÁMARAS TRASERAS\r\n\r\n16 megapíxeles Ultra Wide f/2.2\r\n12 megapíxeles f/1.5-2.4 Dual Pixel\r\n12 megapíxeles f/2.4 Zoom OIS\r\n\r\nCÁMARAS FRONTALES\r\n\r\n10 megapíxeles f/1.9 Dual Pixel\r\n\r\nBATERÍA\r\n\r\n3.400 mAh\r\nCarga rápida\r\nCarga inalámbrica inversa\r\n\r\nSISTEMA\r\n\r\nAndroid 9 Pie\r\nSamsung One UI\r\n\r\nOTROS\r\n\r\n4G categoría 20\r\nWiFi 6\r\nBluetooth 5.0\r\nUSB C\r\nLector de huellas en pantalla\r\nReconocimiento facial 2D\r\nDolby Atmos',990000,'26',_binary 'imagen-producto-1594693275755.webp',2,2,2,6);
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_producto`
--

DROP TABLE IF EXISTS `tipo_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_producto` (
  `id` int NOT NULL,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_producto`
--

LOCK TABLES `tipo_producto` WRITE;
/*!40000 ALTER TABLE `tipo_producto` DISABLE KEYS */;
INSERT INTO `tipo_producto` VALUES (1,'celular'),(2,'accesorio'),(3,'tablet');
/*!40000 ALTER TABLE `tipo_producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_usuario`
--

DROP TABLE IF EXISTS `tipo_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_usuario`
--

LOCK TABLES `tipo_usuario` WRITE;
/*!40000 ALTER TABLE `tipo_usuario` DISABLE KEYS */;
INSERT INTO `tipo_usuario` VALUES (1,'usuario'),(2,'administrador');
/*!40000 ALTER TABLE `tipo_usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `avatar` longblob,
  `idTipoUsuario` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `idTipoUsuario_idx` (`idTipoUsuario`),
  CONSTRAINT `idTipoUsuario` FOREIGN KEY (`idTipoUsuario`) REFERENCES `tipo_usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'admin@gmail.com','$2b$10$9lRVtJ97Z.DLjC.VINFGNeXf7VjkszARp/HGUIAnjoxNd9uxfynt.','administrador','administrador','moreno 525',_binary 'avatar-1593552602711.JPG',2),(7,'test@test.com','$2b$10$ZWh0xNYq6LP4vDEUo8Mah.U5p534nIO4PbjwhXumbJSgMUF55aB7a','prueba','prueba','Cabo Busto 6750 mza 71 lote 47 ',_binary 'avatar-1593617444363.ico',1),(8,'floki@gmail.com','$2b$10$OFNRfKOt/yLjVUfzWFGZFemF8t/5kcXJM4UBCaD4OhAv0vpxPMfAC','FLOKI','LAIS',NULL,_binary 'avatar-1593784047371.JPG',1);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarioproducto`
--

DROP TABLE IF EXISTS `usuarioproducto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarioproducto` (
  `id` int NOT NULL,
  `idUsuario` int unsigned NOT NULL,
  `idProducto` int unsigned NOT NULL,
  `cantidad` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_UsuarioProducto_usuario1_idx` (`idUsuario`),
  KEY `fk_UsuarioProducto_producto1_idx` (`idProducto`),
  CONSTRAINT `fk_UsuarioProducto_producto1` FOREIGN KEY (`idProducto`) REFERENCES `producto` (`id`),
  CONSTRAINT `fk_UsuarioProducto_usuario1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarioproducto`
--

LOCK TABLES `usuarioproducto` WRITE;
/*!40000 ALTER TABLE `usuarioproducto` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarioproducto` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-30 21:39:15
