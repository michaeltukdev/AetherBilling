<?php

namespace App\Modules;

use Exception;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Client\RequestException;

class PterodactylModule extends AbstractModule
{
    protected $serverInfo;

    public function initialize(array $config)
    {
        parent::initialize($config);
        $this->serverInfo = $config;
    }

    public function makeApiCall(string $endpoint, array $data = [])
    {
        try {
            $url = "http://{$this->serverInfo['ip_address']}:{$this->serverInfo['port']}{$endpoint}";
    
            $response = Http::withHeaders([
                'Accept' => 'application/json',
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer ' . $this->serverInfo['module_api_token']
            ])->get($url);
    
            $response->throw(); 
    
            return $response->json();
        } catch (RequestException $e) {

            Log::error("API call failed", [
                'endpoint' => $endpoint,
                'status_code' => $e->response->status(),
                'error_body' => $e->response->body()
            ]);
    
            throw new Exception("An error occurred while making the API call: " . $e->getMessage());
        }
    }
}
