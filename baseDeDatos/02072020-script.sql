-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema lfg
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema lfg
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `lfg` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `lfg` ;

-- -----------------------------------------------------
-- Table `lfg`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lfg`.`categoria` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `lfg`.`color`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lfg`.`color` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `lfg`.`cuota`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lfg`.`cuota` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `lfg`.`marca`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lfg`.`marca` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 10
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `lfg`.`producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lfg`.`producto` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` LONGTEXT NULL DEFAULT NULL,
  `precio` DECIMAL(10,0) NULL DEFAULT NULL,
  `stock` VARCHAR(45) NULL DEFAULT NULL,
  `foto` LONGBLOB NULL DEFAULT NULL,
  `idMarca` INT NULL DEFAULT NULL,
  `idCategoria` INT NULL DEFAULT NULL,
  `idColor` INT NULL DEFAULT NULL,
  `idCuota` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `idMarca_idx` (`idMarca` ASC) VISIBLE,
  INDEX `idCategoria` (`idCategoria` ASC) VISIBLE,
  INDEX `idColor_idx` (`idColor` ASC) VISIBLE,
  INDEX `idCuotas_idx` (`idCuota` ASC) VISIBLE,
  CONSTRAINT `idCategoria`
    FOREIGN KEY (`idCategoria`)
    REFERENCES `lfg`.`categoria` (`id`),
  CONSTRAINT `idColor`
    FOREIGN KEY (`idColor`)
    REFERENCES `lfg`.`color` (`id`),
  CONSTRAINT `idCuotas`
    FOREIGN KEY (`idCuota`)
    REFERENCES `lfg`.`cuota` (`id`),
  CONSTRAINT `idMarca`
    FOREIGN KEY (`idMarca`)
    REFERENCES `lfg`.`marca` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `lfg`.`tipo_usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lfg`.`tipo_usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `lfg`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lfg`.`usuario` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `nombre` VARCHAR(255) NOT NULL,
  `apellido` VARCHAR(255) NOT NULL,
  `direccion` VARCHAR(255) NULL DEFAULT NULL,
  `avatar` LONGBLOB NULL DEFAULT NULL,
  `idTipoUsuario` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `idTipoUsuario_idx` (`idTipoUsuario` ASC) VISIBLE,
  CONSTRAINT `idTipoUsuario`
    FOREIGN KEY (`idTipoUsuario`)
    REFERENCES `lfg`.`tipo_usuario` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `lfg`.`domicilio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lfg`.`domicilio` (
  `id` INT NOT NULL,
  `calle` VARCHAR(45) NULL,
  `numero` INT NULL,
  `localidad` VARCHAR(45) NULL,
  `barrio` VARCHAR(45) NULL,
  `idUsuario` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_domicilio_usuario1_idx` (`idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_domicilio_usuario1`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `lfg`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lfg`.`UsuarioProducto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lfg`.`UsuarioProducto` (
  `id` INT NOT NULL,
  `idUsuario` INT UNSIGNED NOT NULL,
  `idProducto` INT UNSIGNED NOT NULL,
  `cantidad` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_UsuarioProducto_usuario1_idx` (`idUsuario` ASC) VISIBLE,
  INDEX `fk_UsuarioProducto_producto1_idx` (`idProducto` ASC) VISIBLE,
  CONSTRAINT `fk_UsuarioProducto_usuario1`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `lfg`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_UsuarioProducto_producto1`
    FOREIGN KEY (`idProducto`)
    REFERENCES `lfg`.`producto` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lfg`.`formaDePago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lfg`.`formaDePago` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lfg`.`orden`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lfg`.`orden` (
  `id` INT NOT NULL,
  `total` INT NOT NULL,
  `idDomicilio` INT NOT NULL,
  `idUsuario` INT UNSIGNED NOT NULL,
  `idFormaDePago` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_orden_domicilio1_idx` (`idDomicilio` ASC) VISIBLE,
  INDEX `fk_orden_usuario1_idx` (`idUsuario` ASC) VISIBLE,
  INDEX `fk_orden_formaDePago1_idx` (`idFormaDePago` ASC) VISIBLE,
  CONSTRAINT `fk_orden_domicilio1`
    FOREIGN KEY (`idDomicilio`)
    REFERENCES `lfg`.`domicilio` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orden_usuario1`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `lfg`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orden_formaDePago1`
    FOREIGN KEY (`idFormaDePago`)
    REFERENCES `lfg`.`formaDePago` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lfg`.`detalleOrden`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lfg`.`detalleOrden` (
  `id` INT NOT NULL,
  `cantidad` INT NOT NULL,
  `precioUnitario` INT NOT NULL,
  `idOrden` INT NOT NULL,
  `idProducto` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_detalleOrden_orden1_idx` (`idOrden` ASC) VISIBLE,
  INDEX `fk_detalleOrden_producto1_idx` (`idProducto` ASC) VISIBLE,
  CONSTRAINT `fk_detalleOrden_orden1`
    FOREIGN KEY (`idOrden`)
    REFERENCES `lfg`.`orden` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_detalleOrden_producto1`
    FOREIGN KEY (`idProducto`)
    REFERENCES `lfg`.`producto` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
