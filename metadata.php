<?php

use OxidEsales\Eshop\Application\Controller\StartController as StartController;
use OxidSupport\DemoshopBanner\Controller\StartController as DemobannerController;
$sMetadataVersion = '2.1';

$aModule = [
    'id'          => 'oxsdemo',
    'title'       => 'OXID Demoshop Banner',
    'description' => [
        'en' => 'Shows demoshop banner with information about demoshops',
        'de' => 'Zeigt einen Banner für Demoshops mit Informationen an',
    ],
    'thumbnail'   => 'pictures/OXID_Logo.png',
    'version'     => '1.0.0',
    'author'      => 'Adrian Frey',
    'url'         => 'https://www.oxid-esales.com/',
    'email'       => 'adrian.frey@oxid-esales.com',
    'extend'       => [
        StartController::class => DemobannerController::class,
    ],
];
