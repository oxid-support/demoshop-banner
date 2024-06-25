<?php declare(strict_types=1);

namespace OxidSupport\DemoshopBanner\Controller;

use OxidEsales\EshopCommunity\Core\Di\ContainerFacade;
use OxidEsales\EshopCommunity\Internal\Framework\Module\Configuration\Exception\ModuleConfigurationNotFoundException;
use OxidEsales\EshopCommunity\Internal\Framework\Module\Setup\Bridge\ModuleActivationBridgeInterface as BridgeModuleActivationBridgeInterface;
use Psr\Log\LoggerInterface;


class StartController extends StartController_parent{

    private LoggerInterface $logger;

    public function init(){
        $this->logger = ContainerFacade::get(LoggerInterface::class);
        parent::init();
        $this->checkB2BToTemplate();
    }

    public function isB2BActive(): bool
    {
        $moduleActivation = ContainerFacade::get(BridgeModuleActivationBridgeInterface::class);

        $active = false;
        try {
            $active = $moduleActivation->isActive('b2bservices', 1);
        } catch (ModuleConfigurationNotFoundException $exception) {
            //B2B not installed
        }

        return $active;
    }

    private function checkB2BToTemplate(): void
    {
        $b2bActive = $this->isB2BActive();
        error_log('B2B Active: ' . ($b2bActive ? 'true' : 'false'));
        $this->addTplParam('b2bActive', $b2bActive);
    }

}