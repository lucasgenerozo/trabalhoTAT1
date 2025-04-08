<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
        'description',
        'amount'
    ];

    public function typeText(): string
    {
        return ($this->type == 'C' ? 'Entrada' : 'Saída');
    }
}
