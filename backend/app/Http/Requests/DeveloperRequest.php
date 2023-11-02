<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DeveloperRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $rules = [
            "name" => "required|min:3|max:255",
            "level_id" => "required|integer",
            "gender" => "required|min:3|max:255",
            "birth_date" => "required|date",
            "age" => "required|integer",
            "hobby" => "required|min:5|max:255"
        ];

        if ($this->method() === "PATCH" || $this->method() === "PUT") {
            $rules = [
                "name" => "nullable|min:3|max:255",
                "level_id" => "nullable|integer",
                "gender" => "nullable|min:3|max:255",
                "birth_date" => "nullable|date",
                "age" => "nullable|integer",
                "hobby" => "nullable|min:5|max:255"
            ];
        }

        return $rules;
    }

    public function messages(): array
    {
        $messages = [
            "required" => "Esse campo é obrigatório",
            "min" => "Esse campo deve conter no mínimo :min caracteres",
            "max" => "Esse campo deve conter no máximo :max caracteres",
            "integer" => "Esse campo deve ser um número inteiro"
        ];

        return $messages;
    }
}
