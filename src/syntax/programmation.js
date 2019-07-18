module.exports.body = function(theme) {
  let common = [
    {
      name: "Current text",
      scope: [
        "source.python",
        "source.perl",
        "source.ruby",
        "source.shell",
        "source.sql",
        "source.go",
        "source.js"
      ],
      settings: {
        foreground: theme.default + "cc"
      }
    },
    {
      name: "Entity / functions",
      scope: [
        "source.js entity",
        "source.js support.function",
        "source.php entity",
        "source.php support.function",
        "entity.name.function.cs",
        "meta.function.type-declaration.elm entity",
        "entity.name.function.top_level.elm",
        "support.function",
        "entity.name.function.ts",
        "meta.function-call.js support"
      ],
      settings: {
        foreground: theme.blue
      }
    },
    {
      name: "Type",
      scope: [
        "source.js storage.type.function",
        "source.php storage.type.function",
        "source.java storage",
        "keyword.type.cs",
        "storage.type.cs",
        "meta.function.type-declaration.elm storage",
        "storage.type.elm",
        "meta.object.member.js support",
        "support.type.primitive.ts",
        "source.ts meta.type.annotation.ts entity.name.type.ts"
      ],
      settings: {
        foreground: theme.purple
      }
    },
    {
      name: "Import",
      scope: [
        "keyword.control.import.js",
        "keyword.control.import.elm",
        "keyword.other.elm",
        "meta.module.name.elm support",
        "meta.import.elm support",
        "keyword.control.import.ts"
      ],
      settings: {
        foreground: theme.orange
      }
    },
    {
      name: "Comment",
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        fontStyle: "italic",
        foreground: theme.default + "3d"
      }
    },
    {
      name: "Invalid",
      scope: "invalid",
      settings: {
        foreground: theme.red
      }
    },

    {
      name: "Meta Brace",
      scope: ["meta.brace", "source.js meta"],
      settings: {
        foreground: theme.default + "cc"
      }
    },
    {
      name: "Punctuation",
      scope: [
        "punctuation",
        "meta.brace",
        "source.js punctuation.definition.parameters",
        "source.php punctuation.definition.parameters",
        "source.python punctuation.definition.parameters",
        "punctuation.definition.template-expression",
        "source.ts punctuation.definition.parameters",
        "source.elm punctuation",
        "meta.tag.preprocessor.xml",
        "keyword.operator.assignment.js",
        "punctuation.definition.parameters.begin.ts",
        "punctuation.definition.parameters.end.ts"
      ],
      settings: {
        foreground: theme.default + "71"
      }
    },

    {
      name: "Storage",
      scope: [
        "storage",
        "source.ts storage",
        "storage.type.function.arrow",
        "punctuation.definition.parameters",
        "storage.type.class",
        "storage.type.function",
        "keyword"
      ],
      settings: {
        foreground: theme.yellow
      }
    },
    {
      name: "String",
      scope: [
        "string",
        "punctuation.definition.string",
        "source.js string.template",
        "source.js punctuation.definition.string.template",
        "punctuation.definition.string.begin.elm",
        "punctuation.definition.string.end.elm",
        "source.elm string",
        "punctuation.definition.string.begin",
        "punctuation.definition.string.end",
        "source.css string",
        "source.css punctuation.definition.string"
      ],
      settings: {
        foreground: theme.green
      }
    },
    {
      name: "String Template",
      scope: ["string.template", "punctuation.definition.string.template"],
      settings: {
        foreground: theme.greenalt
      }
    },
    {
      name: "This",
      scope: ["variable.language.this.js", "variable.language.this.ts"],
      settings: {
        foreground: theme.default + "cc",
        fontStyle: "italic"
      }
    },
    {
      name: "Support",
      scope: "support",
      settings: {
        foreground: theme.default + "cc"
      }
    },
    {
      name: "Support Variable Property DOM",
      scope: "support.variable.property.dom",
      settings: {
        foreground: theme.default + "cc"
      }
    },
    {
      name: "Variable",
      scope: [
        "variable",
        "punctuation.definition.variable.less",
        "punctuation.definition.variable.php",
        "variable.language",
        "entity.name.type.class.js",
        "entity.name.variable.property.cs",
        "entity.name.variable.field.cs",
        "source.css variable",
        "source.stylus variable",
        "entity.name.type.ts"
      ],
      settings: {
        foreground: theme.salmon
      }
    },
    {
      name: "Constant",
      scope: "constant",
      settings: {
        foreground: theme.red
      }
    }
  ];
  let cs = [
    {
      name: "[CS] - Storage modifier",
      scope: ["storage.modifier.cs", "storage.modifier.ts"],
      settings: {
        foreground: theme.turquoize,
        fontStyle: "italic"
      }
    },
    {
      name: "[CS] - Other objects",
      scope: ["variable.other.object.cs", "variable.other.object.property.cs"],
      settings: {
        foreground: theme.orange
      }
    }
  ];
  let java = [
    {
      name: "[JAVA] - Storage modifier",
      scope: ["storage.modifier.java"],
      settings: {
        foreground: theme.turquoize,
        fontStyle: "italic"
      }
    },
    {
      name: "[JAVA] - Other object",
      scope: ["variable.other.object.java"],
      settings: {
        foreground: theme.orange
      }
    }
  ];

  let javascript = [
    {
      name: "[JAVASCRIPT] - Inherited Component",
      scope: "entity.other.inherited-class.js",
      settings: {
        foreground: "#ccc"
      }
    }
  ];

  let python = [
    {
      name: "[PYTHON]",
      scope: ["storage.type.class", "storage.type.function"],
      settings: {
        foreground: theme.turquoize,
        fontStyle: "italic"
      }
    },
    {
      name: "[PYTHON] - Self Argument",
      scope: "variable.parameter.function.language.special.self.python",
      settings: {
        foreground: theme.pink
      }
    }
  ];
  let typescript = [
    {
      name: "[TYPESCRIPT] - Entity Name Type",
      scope: "source.ts entity.name.type",
      settings: {
        foreground: theme.turquoize
      }
    },

    {
      name: "[TYPESCRIPT] - Punctuation Arrow Parameters",
      scope: "meta.arrow.ts punctuation.definition.parameters",
      settings: {
        foreground: theme.yellow
      }
    },

    {
      name: "[TYPESCRIPT] - Inherited Component",
      scope:
        "entity.other.inherited-class.ts, entity.other.inherited-class.tsx",
      settings: {
        foreground: theme.default + "cc"
      }
    }
  ];
  let elm = [
    {
      name: "[ELM] - Accessor",
      scope: ["record.accessor.elm", "entity.name.record.field.accessor.elm"],
      settings: {
        foreground: theme.red
      }
    },

    {
      name: "[ELM] - Type Constructor",
      scope: ["source.elm constant"],
      settings: {
        foreground: theme.salmon
      }
    },

    {
      name: "[ELM] - Meta",
      scope: ["source.elm meta"],
      settings: {
        foreground: theme.default + "cc"
      }
    }
  ];
  return Object.assign(
    [].concat(common, cs, java, elm, javascript, python, typescript)
  );
};