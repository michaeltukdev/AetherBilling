<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ServerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // Will need to be changed later
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|min:3|string',
            'hostname' => 'nullable|string',
            'ip_address' => 'nullable|ip|required_without:hostname',
            'monthly_cost' => 'nullable|numeric',
            'max_accounts' => 'nullable|integer',
            'port' => 'nullable|integer',
            'nameservers' => 'nullable|json',
            'module_id' => 'required|string',
            'module_username' => 'nullable|string|required_without:module_api_token',
            'module_password' => 'nullable|string|required_without:module_api_token',
            'module_api_token' => 'nullable|string',
        ];
    }
}
